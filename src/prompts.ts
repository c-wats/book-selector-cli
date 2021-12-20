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
          return validateInt(userInput);
        }
      },
    ])
    .then(async (userInput) => {
      return parseInt(userInput.numberOfBooks);
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
      });
  }

  return inquirer
    .prompt(promptsArray)
    .then(async (parameters) => {
      return parameters;
    });
}

export const requestNumberOfAttendees = async (): Promise<number> => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "numberOfAttendees",
        message: "Number of attendees > ",
        filter(userInput) {
          return userInput.toLowerCase();
        },
        validate(userInput) {
          return validateInt(userInput);
        }
      },
    ])
    .then(async (userInput) => {
      return parseInt(userInput.numberOfAttendees);
    });
}

export const requestAttendeeNames = async (numberOfAttendees: number) => {
  let promptsArray: object[] = [];

  for (let i = 1; i <= numberOfAttendees; i++) {
    promptsArray.push(
      {
        type: "input",
        name: `attendee${i}`,
        message: `Name ${i} >`,
      });
  }

  return inquirer
    .prompt(promptsArray)
    .then(async (parameters) => {
      return parameters;
    });
}

const validateInt = (userInput: any): boolean | string => {
  // todo - validate that number is not a float also
  if (parseInt(userInput)) {
    return true;
  } else {
    return "Must be a number";
  }
}
