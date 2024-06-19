const QRCode = require("qrcode");

module.exports = {
  generateQRCode: (data) => {
    let stringdata = JSON.stringify(data);
    return QRCode.toDataURL(stringdata);
  },
};
