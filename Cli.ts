import { Command } from "./src/Command";

class Cli {
    name:string;
    description:string | null;
    prebuiltCommands: boolean;
    private commands:Command[] = [];

    constructor (name:string, description:string | null = null, prebuiltCommands:boolean = true) {
        this.name = name,
        this.description = description,
        this.prebuiltCommands = prebuiltCommands
    };

    command (command:Command) {
        this.commands.push(command);
    };

    public listen () {
    };
};