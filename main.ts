namespace StatusBarKind {
    export const health2 = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ........................................
        ........................................
        ........................................
        .............8..........................
        .............88.........................
        .............988........................
        .............99888......................
        .............9999886666666798...........
        .............9999986666666798...........
        .............999988.....................
        .............99888......................
        .............9988.......................
        .............988........................
        .............8..........................
        ........................................
        ........................................
        `, mySprite, 80, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    pause(500)
    info.changeScoreBy(2)
    statusbar2.value += -2
    pause(200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    pause(1000)
    info.setScore(0)
    statusbar.value += -2
    pause(200)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000606030306060303050501010101010101010101010101010101010101010202010202010202010201010101010101010101010101010101010101010606060603030306060604040404040404040404`, img`
    2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen))
game.splash("Welcome To High Speed Cars")
game.showLongText("Created by Maddison Winters", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let enemyy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(11, 23)
enemyy.setPosition(104, 51)
controller.moveSprite(mySprite, 0, 100)
info.setScore(0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.health2)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(enemyy)
info.startCountdown(60)
forever(function () {
    for (let action of "FURBLBFU") {
        enemyy.setFlag(SpriteFlag.StayInScreen, true)
        if (action == "U") {
            enemyy.x += 24
        } else {
            if (action == "R") {
                enemyy.y += 24
            } else {
                if (action == "B") {
                    enemyy.x += -24
                } else {
                    if (action == "L") {
                        enemyy.y += -24
                    } else {
                        for (let index = 0; index < 4; index++) {
                            if (action == "F") {
                                projectile2 = sprites.createProjectileFromSprite(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . 4 
                                    . . . . . . . . . . . . . 4 4 5 
                                    . . . . . . . . . . . . 4 4 4 5 
                                    . . . . . . . . . . . 4 4 5 5 5 
                                    . . . . . . . . 4 4 4 4 5 5 5 5 
                                    1 f 5 2 2 2 2 2 2 2 4 4 4 5 5 5 
                                    . . . . . . . . 4 4 4 4 5 5 5 5 
                                    . . . . . . . . . . . 4 4 4 4 5 
                                    . . . . . . . . . . . . . d 4 4 
                                    . . . . . . . . . . . . . . . 4 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    `, enemyy, -50, 0)
                            }
                            pause(1000)
                        }
                    }
                }
            }
        }
        pause(1000)
    }
})
