const db = require('../database/db');

class StudentMessages {
  static getMessage(id) {
    const queryText = 'SELECT * FROM studentmessages WHERE id = $1;';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static patchMessage(id, message) {
    const queryText = 'UPDATE studentmessages SET message = $1 WHERE id = $2';
    return db.query(queryText, [id, message]);
  }

  static updateRating(id, newRating) {
    const queryText = 'UPDATE studentmessages SET messagerating = $1 WHERE id = $2';
    return db.query(queryText, [id, newRating]);
  }

  static deleteMessage(id) {
    const queryText = 'DELETE FROM studentmessages WHERE id = $1';
    return db.query(queryText, [id]);
  }
}

module.exports = { StudentMessages };
