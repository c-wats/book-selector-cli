import inquirer from 'inquirer';

export const requestNumberOfBooks = async (): Promise<number> => {
  return inquirer
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
      return numberOfBooks;
    });
}

export const requestBookTitles = async (numberOfBooks: number) => {
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

  return inquirer
    .prompt(promptsArray)
    .then(async (parameters) => {
      return parameters;
    });
}
