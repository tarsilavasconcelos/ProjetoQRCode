const QRCode = require("qrcode");

module.exports = {
  createQRCode: (data) => {
    return QRCode.toDataURL(data);
  },
};
