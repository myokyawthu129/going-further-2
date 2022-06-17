scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles13, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.jumpUp.play()
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles5, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles9, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level10`)
scene.setBackgroundImage(assets.image`background0`)
mySprite = sprites.create(assets.image`truck2`, SpriteKind.Player)
mySprite.ay = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
assets.animation`truck2 animated`,
100,
true
)
