const db = require('../database/db');

class Student {
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

  static joinClass(classId, id) {
    // classId is a classes primary key and should be the classes the
    // student intends to join.
    // id is the student primary of the student which intends to join a class
    // Does not return anything
    const queryText = 'INSERT INTO classmembers (class_id, student, selfRating, peerRating) VALUES ($1, $2, 0, 0);';
    return db.query(queryText, [Number(classId), id]);
  }
}

module.exports = { Student };
