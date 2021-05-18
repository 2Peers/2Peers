const db = require('../database/db');

class Teacher {
  static createClass(code, id) {
    const queryText = 'INSERT INTO classes (classcode, teacher_id) VALUES ($1, $2)';
    return db.query(queryText, [code, id]);
  }

  static getById(id) {
    const queryText = 'SELECT * FROM teachers WHERE id = $1';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }
}

module.exports = Teacher;
