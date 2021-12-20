import { Command } from 'commander';

const cli = new Command();

cli
  .option("-t, --test", "Test");

cli.parse(process.argv);

const options = cli.opts();

if ( Object.keys(options).length === 0 ) console.log("No options provided");
if ( options.test ) console.log("Test");
