import { Command } from "./Command.js";

class Cli {
    name:string;
    description:string | null;
    prebuiltCommands: boolean; // ver todos os comandos, help etc...
    private commands:Command[] = [];

    constructor (name:string, description:string | null = null, prebuiltCommands:boolean = true) {
        this.name = name,
        this.description = description,
        this.prebuiltCommands = prebuiltCommands
    };
};