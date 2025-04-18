const db = require('../config/db');


const User = {
  createUser: async (name, email) => {
    const [rows, fields] = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    return rows;
  },
};

module.exports = User;
