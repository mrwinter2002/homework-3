// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0a000a0005030506030306030506010101010101010101010101010101010101010101010101010101010101020201020201020201020101010101010101010101010101010101010101010101010101010101010305030503030503030504040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen)
            case "level_0": return tiles.createTilemap(hex`0a000a0005030506030306030506010101010101010101010101010101010101010101010101010101010101020201020201020201020101010101010101010101010101010101010101010101010101010101010305030503030503030504040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
