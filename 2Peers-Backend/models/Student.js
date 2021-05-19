const db = require('../database/db');

class Student {
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
}

module.exports = { Student };
