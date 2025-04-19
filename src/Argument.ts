export class Argument {
    aliasCharacter:string;
    callback:Function;

    constructor (aliasCharacter:string, callback:Function) {
        this.aliasCharacter = aliasCharacter,
        this.callback = callback
    };
};