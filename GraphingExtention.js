import Complex from "complex.js";

class GraphingExtension {
    getInfo() {
        return {
        id: 'findamount',
        name: 'Graphing Extension',
        blocks: [
            {
                opcode: 'FindAmount',
                blockType: Scratch.BlockType.REPORTER,
                text: 'find amount of [CHAR] in [VAR]',
                arguments: {
                    CHAR: {
                    type: Scratch.ArgumentType.STRING
                    },
                    VAR: {
                    type: Scratch.ArgumentType.STRING
                    }
                }    
            },
            {
                opcode: 'Power',
                blockType: Scratch.BlockType.REPORTER,
                text: '[ONE] ^ [TWO]',
                arguments:{
                    ONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    TWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                }
            },
            {
                opcode: 'FloatToFraction',
                blockType: Scratch.BlockType.REPORTER,
                text: 'float to fraction [NUM]',
                arguments:{
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            },
            {
                opcode: 'ComplexPow',
                blockType: Scratch.blockType.REPORTER,
                text: 'complex [RONE][IONE] ^ [RTWO][ITWO]',
                arguments:{
                    RONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    IONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    RTWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    ITWO: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            }
        ]
        };
    }

    FindAmount(args) {
        return args.VAR.match(/args.CHAR/g);
    }

    Power(args){
        return Math.pow(args.ONE, args.TWO);
    }

    FloatToFraction(args) {
        const tolerance = .0000000001;
        let h1 = 1;
        let h2 = 0;
        let k1 = 0;
        let k2 = 1;
        let b = args.NUM;
        
        do {
            const a = Math.floor(b);
            let temp = h1;
            h1 = a * h1 + h2;
            h2 = temp;
            temp = k1;
            k1 = a * k1 + k2;
            k2 = temp;
            b = 1 / (b - a);
        } while (Math.abs(args.NUM - h1 / k1) > args.NUM * tolerance);
    
        return `${h1}/${k1}`;
    }

    ComplexPow(args){
        return Complex(args.RONE, args.IONE).pow(args.RTWO, args.ITWO);
    }
}

Scratch.extensions.register(new GraphingExtension());  