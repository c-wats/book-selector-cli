import { Command } from 'commander';
import { requestNumberOfBooks, requestBookTitles, requestNumberOfAttendees, requestAttendeeNames, requestBookRankingsPerAttendee } from './prompts';

const cli = new Command();

cli
  .option("-t, --test", "Test");

cli.parse(process.argv);

const bookSelector = async () => {
  console.log('Hello! Welcome to Book Selector.');
  
  const numberOfBooks: number = await requestNumberOfBooks();
  const bookTitles: object = await requestBookTitles(numberOfBooks);
  const numberOfAttendees: number = await requestNumberOfAttendees();
  const attendeeNames: object = await requestAttendeeNames(numberOfAttendees);
  const rankings: object = await requestBookRankingsPerAttendee(bookTitles, attendeeNames);

  console.log(bookTitles);
  console.log(attendeeNames);
  console.log(rankings);
}

const options = cli.opts();

if (Object.keys(options).length === 0) bookSelector();
if (options.test) console.log("Test");
