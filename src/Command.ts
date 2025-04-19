import { Argument } from "./Argument";

export class Command {
    private callback:Function;
    private description:string | null;
    private alias:string[] | null;
    private args:Argument[] | null;
    private calls:string[] = [];

    constructor (commandName:string, callback:Function, description:string | null = null, alias:string[] | null = null, args:Argument[] | null = null) {
        this.callback = callback,
        this.description = description,
        this.alias = alias,
        this.args = args,
        this.calls[0] = commandName;
        if (this.alias !== null) {
            this.alias.forEach(alias => {
                this.calls.push(alias);
            });
        }
    };

};