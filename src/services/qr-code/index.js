const qrcode = require("qrcode-terminal");

module.exports = {
  qrCodeGenerator: async (rl) => {
    var qrCodeData = await rl.question(
      "O que você deseja inserir no QR Code? \n\n"
    );
    qrcode.generate(qrCodeData, { small: true });
  },
};
