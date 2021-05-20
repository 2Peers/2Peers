const db = require('../database/db');

class Classroom {
  static getClass(id) {
    const queryText = 'SELECT * FROM classes WHERE id = $1;';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static getClassByCode(code) {
    const queryText = 'SELECT id FROM classes WHERE classcode = $1';
    return db.query(queryText, [code]).then((results) => results.rows[0]);
  }

  static getClasses(id) {
    const queryText = 'SELECT class_id FROM classes INNER JOIN classmembers ON classes.id = classmembers.class_id WHERE classmembers.student = $1;';
    return db.query(queryText, [id]).then((results) => results.rows);
  }

  static getTeacherClasses(id) {
    const queryText = 'SELECT * FROM classes WHERE teacher_id = $1';
    return db.query(queryText, [id]).then((results) => results.rows);
  }

  static getClassMember(id, classid) {
    const queryText = 'SELECT * FROM classmembers WHERE student = $1 AND class_id = $2;';
    return db.query(queryText, [id, classid]).then((results) => results.rows[0]);
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

  static updateSelfRating(classid, studentid, newRating) {
    const queryText = 'UPDATE classmembers SET selfrating = $1 WHERE class_id = $2 AND student = $3 RETURNING *';
    return db.query(queryText, [newRating, classid, studentid]).then((results) => results.rows[0]);
  }
}

module.exports = { Classroom };
