const db = require('../database/db');

class Teacher {
  static createClass(code, id) {
    const queryText = 'INSERT INTO classes (classcode, teacher_id) VALUES ($1, $2)';
    return db.query(queryText, [code, id]);
  }
}

module.exports = Teacher;
