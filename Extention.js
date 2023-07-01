class HelloWorld {
  getInfo() {
    return {
      id: 'Extention',
      name: 'Extention',
      blocks: [
        {
          opcode: 'negitive',
          blockType: Scratch.BlockType.REPORTER,
          text: '-[NUMBER]!',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        }
      ]
    };
  }

  hello() {
    return 'World!';
  }
}

Scratch.extensions.register(new HelloWorld());
