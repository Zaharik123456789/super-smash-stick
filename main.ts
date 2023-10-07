controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`p1anj`,
    200,
    false
    )
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed()) {
        projectile = sprites.createProjectileFromSprite(assets.image`gun`, mySprite, -100, 0)
    } else if (controller.player2.isPressed(ControllerButton.B)) {
        projectile = sprites.createProjectileFromSprite(assets.image`gun`, mySprite, -100, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.max += 1
        sprites.destroy(projectile)
    } else if (controller.player2.isPressed(ControllerButton.B)) {
        statusbar.max += 1
        sprites.destroy(projectile)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`p1anl`,
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`p2anj`,
    200,
    false
    )
    if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
        mySprite2.vy = -200
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`p1anr`,
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`p2anr`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.player2.isPressed(ControllerButton.A)) {
        statusbar.max += 2
    } else if (controller.A.isPressed()) {
        statusbar2.max += 2
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`p2anl`,
    200,
    true
    )
})
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundImage(assets.image`bg`)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite2 = sprites.create(assets.image`player p2`, SpriteKind.Player)
mySprite = sprites.create(assets.image`player p1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
controller.player2.moveSprite(mySprite2, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 600
mySprite2.ay = 600
statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(mySprite2)
