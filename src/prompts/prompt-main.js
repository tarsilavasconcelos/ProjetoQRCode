const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
const qrCodeModule = require("../services/qr-code");
var password = require("../services/password");

module.exports = {
  startProgram: async () => {
    console.clear();

    const userInput = await rl.question(
      "Digite uma opção para continuar: \n" +
        "[1] - Criador de senha\n" +
        "[2] - Gerador de QR Code\n\n"
    );

    switch (userInput) {
      case "1":
        await password.passwordGenerator(rl);
        break;
      case "2":
        await qrCodeModule.qrCodeGenerator(rl);
        break;
      case "99":
        break;
      default:
        await main();
    }

    rl.close();
  },
};
