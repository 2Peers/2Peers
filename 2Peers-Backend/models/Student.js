const db = require('../database/db');

class Student {
  static signUp(body) {
    const queryStudent = 'INSERT INTO students (name, email, prolfilepic, encryptedpassword, archived) VALUES ($1, $2, $3, $4, $5)';
    const studentPic = 'https://www.pngitem.com/pimgs/m/77-778738_transparent-indian-elephant-png-cartoon-elephant-side-view.png';
    const archived = false;

    return db.query(
      queryStudent, [body.name, body.email, studentPic, body.encrypt, archived],
    );
  }

  static getStudent(body) {
    const queryText = 'SELECT * FROM students WHERE email = $1';
    return db.query(queryText, [body.email]).then((results) => results.rows[0]);
  }

  static addMessage(details, id) {
    // destructuring req.body to get message rating,
    // can not destructure class since class is a keyword...
    const { message } = details;
    // psql command to insert data into the studentmessages table
    const queryText = 'INSERT INTO studentmessages (student, class, message, date) VALUES ($1, $2, $3, NOW()) RETURNING *;';
    // will return the information we just sent to the table
    // to ensure that everything was sent correctly
    return db.query(queryText, [Number(id), Number(details.class), message])
      .then((results) => results.rows[0]);
  }

  static getStudentById(id) {
    const queryText = 'SELECT * FROM students WHERE id = $1';
    return db.query(queryText, [id]).then((result) => result.rows[0]);
  }

  static joinClass(id, classid) {
    const queryText = 'INSERT INTO classMembers (student, selfRating, peerRating, class_id) VALUES ($1, 0, 0, $2) RETURNING *;';
    return db.query(queryText, [id, classid]).then((results) => results.rows[0]);
  }

  static patchUser(id, name, email) {
    const queryText = 'UPDATE students SET name = $1, email = $2 WHERE id = $3 RETURNING *;';
    return db.query(queryText, [name, email, id]).then((results) => results.rows[0]);
  }

  static deleteStudent(id) {
    const queryText = 'DELETE FROM students WHERE id = $1';
    return db.query(queryText, [id]);
  }
}

module.exports = { Student };
