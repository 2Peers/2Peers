const db = require('../database/db');

class Student {
  static addMessage(details, id) {
    console.log('adding message');
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
}

module.exports = { Student };
