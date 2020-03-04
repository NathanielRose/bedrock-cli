import { Command } from "../command";

const subcommands = ["add", "delete", "set-default"];

export const commandDecorator = Command(
  "ring",
  "Ring management for a bedrock project.",
  subcommands.map(m => {
    const cmd = require(`./${m}`);
    return cmd.commandDecorator;
  })
);
