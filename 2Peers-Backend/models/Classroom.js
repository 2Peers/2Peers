const db = require('../database/db');

class Classroom {
  static getClass(id) {
    const queryText = 'SELECT * FROM classes WHERE id = $1;';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static getClasses(id) {
    const queryText = 'SELECT class_id FROM classes INNER JOIN classmembers ON classes.id = classmembers.class_id WHERE classmembers.student = $1;';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static getClassMembers(id) {
    const queryText = 'SELECT * FROM classmembers WHERE class_id = $1';
    return db.query(queryText, [id]).then((results) => results.rows);
  }
}

module.exports = { Classroom };
