const db = require('../database/db');

class Student {
  static signUp(body) {
    const queryStudent = 'INSERT INTO students (name, email, profilepic, encryptedpassword, archived) VALUES ($1, $2, $3, $4, $5)';
    const studentPic = 'https://www.pngitem.com/pimgs/m/77-778738_transparent-indian-elephant-png-cartoon-elephant-side-view.png';
    const archived = false;

    return db.query(
      queryStudent, [body.name, body.email, studentPic, body.encrypt, archived],
    );
  }

  static getStudent(body){
    const queryText = 'SELECT * FROM students WHERE email = $1'
    return db.query(queryText, [body.email]).then(results => results.rows[0]);
  }

  static addMessage(details, id) {
    // destructuring req.body to get message rating,
    // can not destructure class since class is a keyword...
    const { message, messagerating } = details;
    // psql command to insert data into the studentmessages table
    const queryText = 'INSERT INTO studentmessages (student, class, message, messagerating, date) VALUES ($1, $2, $3, $4, NOW()) RETURNING *;';
    // will return the informationn we just sent to the table
    // to ensure that everything was sent correctly
    return db.query(queryText, [Number(id), Number(details.class), message, Number(messagerating)])
      .then((results) => results.rows[0]);
  }
}

module.exports = { Student };
