const permittedCharacters = {
  alphanumeric:
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  numeric: "0123456789",
  alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!@#$%^&*()_+-={}|[]:;<>?,./~`",
};

module.exports = {
  getPermittedCharacters: (type) => {
    return permittedCharacters[type];
  },
};
