const passwordHash = require("password-hash");

module.exports = {
  createPassword: (password) => {
    return passwordHash.generate(password);
  },
};
