class HelloWorld {
  getInfo() {
    return {
      id: 'Extension',
      name: 'Extension',
      blocks: [
        {
          opcode: 'negative',
          blockType: Scratch.BlockType.REPORTER,
          text: '- [NUMBER]',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '10',
            },
          },
        },
        {
          opcode: 'costumeNumberOfSprite',
          blockType: Scratch.BlockType.REPORTER,
          text: 'costume number of [SPRITE]',
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
            },
          },
        },
      ],
    };
  }

  negative(args) {
    return -args.NUMBER;
  }

  costumeNumberOfSprite(args) {
    const spriteName = args.SPRITE;
    const sprite = Scratch.stage.getSpriteByName(spriteName);

    if (sprite) {
      const currentCostumeIndex = sprite.currentCostume;
      return currentCostumeIndex + 1;
    }

    return 0;
  }
}

Scratch.extensions.register(new HelloWorld());
