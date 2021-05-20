const db = require('../database/db');

class Teacher {
  static createClass(code, id) {
    const queryText = 'INSERT INTO classes (classcode, teacher_id) VALUES ($1, $2) RETURNING *;';
    return db.query(queryText, [code, id]).then((results) => results.rows[0]);
  }

  static getById(id) {
    const queryText = 'SELECT * FROM teachers WHERE id = $1';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static patchUser(id, name, email) {
    const queryText = 'UPDATE teachers SET name = $1, email = $2 WHERE id = $3 RETURNING *;';
    return db.query(queryText, [name, email, id]).then((results) => results.rows[0]);
  }

  static addMessage(teacherId, classId, message) {
    const queryText = 'INSERT INTO teacherMessages (teacher, class, message, date) VALUES ($1, $2, $3, now());';
    return db.query(queryText, [teacherId, classId, message]);
  }

  static deleteTeacher(teacherid) {
    const queryText = 'DELETE FROM teachers WHERE id = $1';
    return db.query(queryText, [teacherid]);
  }
}

module.exports = Teacher;
