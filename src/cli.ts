import { Command } from 'commander';

const cli = new Command();

cli
  .option("-t, --test", "Test");

cli.parse(process.argv);

const options = cli.opts();
if (options.test) console.log("Test");
