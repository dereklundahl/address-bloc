const inquirer = require('inquirer');
var dateFormat = require('dateformat');
var now = new Date();

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get date",
          "Remind me",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          break;
        case "Get date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        case "Remind me":
          this.remindMe();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear() {
    console.log('\x1Bc');
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount() {
    return this.contacts.length;
  }

  getDate() {
    this.clear();
    console.log(dateFormat(now));
    this.main();
  }

  remindMe() {
    var message = "Learning is a life-long pursuit";
    console.log(message);
    return message;
  }

}
