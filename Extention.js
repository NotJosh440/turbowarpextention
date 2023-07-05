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
        },
        {
          opcode: "isBetween",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "is [INPUT] between [LOW] and [HIGH]?",
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.NUMBER,
              default: "2"
            },
            LOW: {
              type: Scratch.ArgumentType.NUMBER,
              default: "1"
            },
            HIGH: {
              type: Scratch.ArgumentType.NUMBER,
              default: "3"
            },
          }
        }
      ]
    };
  }

  negitive(args) {
    return args.NUMBER * -1;
  }

  costumeNumberOfSprite(args){
    return args.SPRITE.costumeNumber;
  }

  isBetween(args){
    if(args.LOW <= args.HIGH){ //LOW is less than HIGH
      if(args.LOW <= args.INPUT && args.INPUT <= args.HIGH){ //LOW is less than INPUT and INPUT is less than HIGH
        return true;
      } else {
        return false;
      }
    } else { //HIGH is less than LOW
      if(args.LOW >= args.INPUT && args.INPUT >= args.HIGH){ //LOW is greater than INPUT and INPUT is greater than HIGH
        return true;
      } else {
        return false;
      }
    }
  }
  
}

Scratch.extensions.register(new HelloWorld());