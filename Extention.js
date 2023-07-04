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

  getSpriteByName(spriteName) {
    const targets = this.runtime.targets;
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      if (target.sprite && target.sprite.name === spriteName) {
        return target.sprite;
      }
    }
    return null;
  }

  costumeNumberOfSprite(args) {
    const spriteName = args.SPRITE;
    const sprite = this.getSpriteByName(spriteName);

    if (sprite) {
      const currentCostumeIndex = sprite.getCurrentCostumeIndex();
      return currentCostumeIndex + 1;
    }

    return 0;
  }
}

Scratch.extensions.register(new HelloWorld());
