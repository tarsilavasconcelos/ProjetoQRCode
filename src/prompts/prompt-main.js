const inquirer = require("inquirer");

module.exports = {
  askForData: () => {
    return inquirer.prompt([
      {
        message: "Por favor, insira seu nome:",
        name: "name",
      },
      {
        message: "Por favor, insira sua idade:",
        name: "age",
      },
      {
        message: "Por favor, insira seu departamento:",
        name: "department",
      },
      {
        message: "Por favor, insira seu ID:",
        name: "id",
      },
    ]);
  },
};
