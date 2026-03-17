#!/usr/bin/env node

import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { addCommand } from "./commands/add.js";

const program = new Command();

program
  .name("shubh-ui")
  .description("CLI tool for scaffolding components from @shubh/ui design system")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize a new project with @shubh/ui configuration")
  .action(initCommand);

program
  .command("add <components...>")
  .description("Add one or more components to your project")
  .option("-c, --components <list>", "Comma-separated list of components")
  .action(addCommand);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
