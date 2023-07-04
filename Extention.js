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

  negitive(args) {
    return args.NUMBER * -1;
  }
  costumeNumberOfSprite(args){
    let differentSprite = args.SPRITE;
    let currentCostumeIndex = differentSprite.costumeNumber();
    return currentCostumeIndex;
  }
}

Scratch.extensions.register(new HelloWorld());