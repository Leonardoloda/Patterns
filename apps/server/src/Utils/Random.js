module.exports = {
  generateUUID() {
    const random = [];
    for (let index = 1; index < 20; index++) {
      random.push(index % 5 !== 0 ? Math.round(Math.random() * 10) : "-");
    }

    return random.join("");
  },
};
