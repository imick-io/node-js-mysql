const db = require("../utils/database");

module.exports = class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static async all() {
    return db
      .execute("SELECT * FROM users")
      .then(([rows, fieldData]) => {
        return rows;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async findById(id) {
    return db
      .execute("SELECT * FROM users WHERE id = ?", [id])
      .then(([rows, fieldData]) => {
        return rows[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
