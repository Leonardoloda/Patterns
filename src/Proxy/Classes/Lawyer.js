class Lawyer {
  constructor(message) {
    this.message = message || "default";
  }

  setMessage(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}

module.exports = { Lawyer };
