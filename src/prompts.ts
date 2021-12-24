import inquirer from 'inquirer';

export const requestNumberOfBooks = async (): Promise<number> => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "numberOfBooks",
        message: "Number of books to choose from > ",
        validate(userInput) {
          return (parseInt(userInput) && userInput > 1) ? true : "Must be a number and greater than 1";
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
        filter(userInput: string) {
          return userInput.trimEnd();
        }
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
        validate(userInput) {
          return (parseInt(userInput) && userInput > 1) ? true : "Must be a number and greater than 1";
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
        filter(userInput: string) {
          return userInput.trimEnd();
        }
      });
  }

  return inquirer
    .prompt(promptsArray)
    .then(async (parameters) => {
      return parameters;
    });
}

export const requestBookRankingsPerAttendee = async (bookTitles: object, attendeeNames: object): Promise<object> => {
  prettyPrintBookTitles(bookTitles);
  const attendees = Object.values(attendeeNames);

  let promptsArray: object[] = [];

  attendees.forEach(attendee => {
    promptsArray.push(
      {
        type: "input",
        name: `${attendee}BookRanking`,
        message: `Book ranking for ${attendee}: \n(please use the numbers assigned to each book and separate by a space) \n>`,
        validate(userInput: string) {
          // validate book ranking formatting
          return true;
        }
      });
  })

  return inquirer
    .prompt(promptsArray)
    .then(async (parameters) => {
      return parameters;
    });
}

const prettyPrintBookTitles = (bookTitles: any) => {
  console.log("Book Choices: ")
  const books = Object.keys(bookTitles).sort();
  const prettyBooks: string[] = books.map(book => {
    return `${book.substring(9, 10)}. ${bookTitles[book]}`;
  })
  prettyBooks.forEach(book => {
    console.log(book);
  })
}
