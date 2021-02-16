namespace SpriteKind {
    export const leftside = SpriteKind.create()
    export const Rightside = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    speed = 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftside, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.left = otherSprite.right + 8
    scene.cameraShake(4, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rightside, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.right = otherSprite.left - 8
    scene.cameraShake(4, 200)
})
let roadslice_Right: Sprite = null
let roadsliceleft: Sprite = null
let turnOFFset = 0
let speed = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . a a c c a a . . . . 
    . . . . . a 7 7 7 7 7 7 a . . . 
    . . . . 7 c 7 7 7 7 7 7 c 7 . . 
    . . . a 7 c d 7 7 7 7 7 c 7 a . 
    . . . 5 7 7 d 7 7 7 7 7 c 7 5 . 
    . . . 5 7 7 d 7 7 7 7 7 7 7 5 . 
    . . . 5 7 7 d 7 7 7 7 7 7 7 5 . 
    . . . 5 7 c 7 d d 7 7 7 c 7 5 . 
    . . . a 7 c a c c c c a c 7 a . 
    . . . a 7 a c b b b b c a 7 a . 
    . . . a 7 a b b b b b b a 7 a . 
    . . . a a a a a a a a a a a a . 
    . . . 5 a d a a a a a a d a 5 . 
    . . . 5 a 7 d a a a a d 7 a 5 . 
    . . . 5 5 a a a a a a a a 5 5 . 
    . . . . 5 5 . . . . . . 5 5 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
speed = 0
info.setLife(3)
game.onUpdateInterval(100, function () {
    turnOFFset = randint(-2, 2)
    turnOFFset = Math.constrain(turnOFFset, -20, 10)
    roadsliceleft = sprites.createProjectileFromSide(img`
        77777777777777777777777777777777777bbbbb77777777777777777bbbbb..................
        77788888777777777777777777777777777bbbbb77777777777777777bbbbb..................
        77788888777777777777788888777777777bbbbbbb777777777777777bbbbbbb................
        77788888777777777777788888777777777bbbbbbb777777777777777bbbbbbb................
        77788888777777777777788888777777777bbbbbbb77777777777777777bbbbbb...............
        7778888877777777777778888877777777777bbbbbb7777777777777777bbbbbb...............
        7777777777777777777778888877777777777bbbbbb7777777777777777bbbbbbb..............
        7777777777788888777777777777777777777bbbbbb77777777777777777bbbbbb..............
        7777777777788888777777777777777777777bbbbbb77777777777777777bbbbbb..............
        7777777777788888777777777777777777777bbbbbb77777777777777777bbbbbb..............
        `, 0, 80)
    roadsliceleft.setKind(SpriteKind.leftside)
    roadsliceleft.x += turnOFFset
    roadslice_Right = sprites.createProjectileFromSide(img`
        ......bbbbb777777777777777777777777777777777777777777777777777777777777777777777
        ......bbbbb777777777777777777777777777777777777777777777777777777777777777777777
        ......bbbbbbb7777777777777777777777777778888877777777777777777777788888777777777
        ......bbbbbbb7777777777777777777777777778888877777777777777777777788888777777777
        ......bbbbbbb7777777777777777777777777778888877777777777777777777788888777777777
        ........bbbbbb777777777777777777777777778888877777777777777777777788888777777777
        ........bbbbbb777777777777777777777777778888877777777777777777777788888777777777
        ........bbbbbb777777777777777777777777777777777777788888777777777777777777777777
        ........bbbbbb777777777777777777777777777777777777788888777777777777777777777777
        ........bbbbbb777777777777777777777777777777777777788888777777777777777777777777
        `, 0, 80)
    roadslice_Right.setKind(SpriteKind.Rightside)
    roadslice_Right.right = 200
    roadslice_Right.x += turnOFFset
})
