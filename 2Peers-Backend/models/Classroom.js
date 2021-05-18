const db = require('../database/db');

class Classroom {
  static getClass(id) {
    const queryText = 'SELECT * FROM classes WHERE id = $1;';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static getClassByCode(code) {
    const queryText = 'SELECT * FROM classes WHERE classcode = $1';
    return db.query(queryText, [code]).then((results) => results.rows[0]);
  }

  static getClasses(id) {
    const queryText = 'SELECT class_id FROM classes INNER JOIN classmembers ON classes.id = classmembers.class_id WHERE classmembers.student = $1;';
    return db.query(queryText, [id]).then((results) => results.rows);
  }

  static getClassMembers(id) {
    const queryText = 'SELECT * FROM classmembers WHERE class_id = $1';
    return db.query(queryText, [id]).then((results) => results.rows);
  }

  static getStudentClassMessages(id) {
    const queryText = 'SELECT * FROM classes INNER JOIN studentmessages on classes.id = studentmessages.class WHERE classes.id = $1';
    return db.query(queryText, [id]).then((results) => results.rows);
  }

  static getTeacherClassMessages(id) {
    const queryText = 'SELECT * FROM classes INNER JOIN teachermessages on classes.id = teachermessages.class WHERE classes.id = $1';
    return db.query(queryText, [id]).then((results) => results.rows);
  }
}

module.exports = { Classroom };
