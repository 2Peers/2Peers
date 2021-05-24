const db = require('../database/db');

class Teacher {
  static signUp(body) {
    const queryTeacher = 'INSERT INTO teachers (name, email, profilepic, encryptedpassword, archived) VALUES ($1, $2, $3, $4, $5)';
    const teacherPic = 'https://i.pinimg.com/originals/56/b4/9f/56b49f8fe357deecf54ad7805209d79e.png';
    const archived = false;

    return db.query(
      queryTeacher, [body.name, body.email, teacherPic, body.encrypt, archived],
    );
  }

  static getTeacher(body) {
    const queryText = 'SELECT * FROM teachers WHERE email = $1';
    return db.query(queryText, [body.email]).then((results) => results.rows[0]);
  }

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

  static patchMessage(messageid, message) {
    const queryText = 'UPDATE teachermessages SET message = $1 WHERE id = $2 RETURNING *;';
    return db.query(queryText, [message, messageid]).then((results) => results.rows[0]);
  }

  static deleteTeacher(teacherid) {
    const queryText = 'DELETE FROM teachers WHERE id = $1';
    return db.query(queryText, [teacherid]);
  }
}

module.exports = { Teacher };
