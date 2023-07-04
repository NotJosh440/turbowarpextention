class HelloWorld {
  getInfo() {
    return {
      id: 'Extention',
      name: 'Extention',
      blocks: [
        {
          opcode: 'negitive',
          blockType: Scratch.BlockType.REPORTER,
          text: '-[NUMBER]',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '10'
            }
          },
        },
        {
          opcode: "costumeNumberOfSprite",
          blockType: Scratch.BlockType.REPORTER,
          text: "costume number of [SPRITE]",
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
            }
          }
        }
      ]
    };
  }

  function (ext) {
    // Block definition
    ext.getCostumeInfo = function (spriteName) {
      var sprite = Stage.sprite[spriteName];
      if (!sprite) {
        return null;
      }
  
      var costume = sprite.costumes[sprite.currentCostumeIndex];
      if (!costume) {
        return null;
      }
  
      var costumeInfo = {
        name: costume.costumeName,
        number: sprite.currentCostumeIndex + 1
      };
  
      return costumeInfo;
    };
  
    // Block metadata
    var descriptor = {
      blocks: [
        ['r', 'costume name of %s', 'getCostumeInfo', 'Sprite1'],
        ['r', 'costume number of %s', 'getCostumeInfo', 'Sprite1']
      ]
    };
    // Block metadata
    var descriptor = {
      blocks: [
        ['r', 'costume name of %s', 'getCostumeInfo', 'Sprite1'],
        ['r', 'costume number of %s', 'getCostumeInfo', 'Sprite1']
      ]
    }
  }
  
    // Register the extension

  negitive(args) {
    return args.NUMBER * -1;
  }
  costumeNumberOfSprite(args){
    let differentSprite = args.SPRITE;
    let currentCostumeIndex = differentSprite.costumeNumber();
    return currentCostumeIndex;
  }
}

Scratch.extensions.register(new HelloWorld(), descriptor, ext);