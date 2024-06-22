module.exports = {
  passwordGenerator: async (rl) => {
    var length = await rl.question("Qual o tamanho da senha que você deseja?");

    if (isNaN(length)) {
      console.log("Aceitamos apenas números");
      return;
    }

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    var password = "";

    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    console.log(password);
    return password;
  },
};
