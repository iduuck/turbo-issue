#!/usr/bin/env node

import { Command } from "commander";

const program = new Command("foo");
program.showHelpAfterError().showSuggestionAfterError();

program
  .command("serve")
  .alias("dev")
  .description("Start development server")
  .action(() => console.log('Server started'));

program.parse(process.argv);
