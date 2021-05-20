const db = require('../database/db');

class StudentMessages {
  static getMessage(id) {
    const queryText = 'SELECT * FROM studentmessages WHERE id = $1;';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }

  static getClassMessages(id, classid) {
    const queryText = 'SELECT * FROM studentmessages WHERE student = $1 AND class = $2;';
    return db.query(queryText, [id, classid]).then((results) => results.rows);
  }

  static patchMessage(id, message) {
    const queryText = 'UPDATE studentmessages SET message = $1 WHERE id = $2 RETURNING *;';
    return db.query(queryText, [message, id]).then((results) => results.rows[0]);
  }

  static deleteMessage(id) {
    const queryText = 'DELETE FROM studentmessages WHERE id = $1';
    return db.query(queryText, [id]);
  }
}

module.exports = { StudentMessages };
