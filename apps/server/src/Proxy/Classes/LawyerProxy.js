class LawyerProxy {
  constructor(lawyer) {
    // Hide the original object with a private attribute
    this._lawyer = lawyer;
  }

  setMessage(message) {
    if (!message) {
      console.warn("Won't assign empty message");
      return;
    }
    this._lawyer.setMessage(message);
  }

  getMessage() {
    return this._lawyer.message;
  }
}

module.exports = { LawyerProxy };
