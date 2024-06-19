const passwordHash = require("password-hash");

module.exports = {
  handlePassword: (password, hashedPassword) => {
    return passwordHash.verify(password, hashedPassword);
  },
};
