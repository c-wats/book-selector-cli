import { Command } from 'commander';
import inquirer from 'inquirer';

const cli = new Command();

cli
  .option("-t, --test", "Test");

cli.parse(process.argv);

const requestBookChoices = () => {
  console.log('Hello! Welcome to Book Selector.');

  inquirer
    .prompt([
      {
        type: "input",
        name: "numberOfBooks",
        message: "Number of books to choose from > ",
        filter(userInput) {
          return userInput.toLowerCase();
        },
        validate(userInput) {
          // todo check not an float
          if (parseInt(userInput)) {
            return true;
          } else {
            return "Must be a number";
          }
        }
      },
    ])
    .then(async (userInput) => {
      const numberOfBooks: number = parseInt(userInput.numberOfBooks);
      requestBookTitles(numberOfBooks);
    });
}

const requestBookTitles = (numberOfBooks: number) => {
  console.log(numberOfBooks);

  let promptsArray: object[] = [];
  for (let i = 1; i <= numberOfBooks; i++) {
    promptsArray.push(
      {
        type: "input",
        name: `bookTitle${i}`,
        message: `Title of book ${i} >`,
        filter(userInput: string) {
          return userInput.toLowerCase();
        }
      });
  }

  inquirer
    .prompt(promptsArray)
    .then(async (parameters) => {
      console.log(parameters);
    });
}

const options = cli.opts();

if (Object.keys(options).length === 0) requestBookChoices();
if (options.test) console.log("Test");
