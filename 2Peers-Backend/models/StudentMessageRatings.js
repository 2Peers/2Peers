const db = require('../database/db');

class StudentMessageRatings {
  static getMessageRating(messageid, studentid) {
    const queryText = 'SELECT * FROM studentRatings WHERE messageid = $1 AND raterid = $2';
    return db.query(
      queryText, [Number(messageid), Number(studentid)],
    ).then((results) => results.rows[0]);
  }

  static postMessageRating(messageid, studentid, rating) {
    const queryText = 'INSERT INTO studentRatings (raterid, messageid, rating) VALUES ($1, $2, $3);';
    return db.query(queryText, [studentid, messageid, rating]);
  }

  static getAvgMessageRatings(id) {
    const queryText = 'SELECT AVG(rating) FROM studentratings WHERE messageid = $1;';
    return db.query(queryText, [Number(id)]).then((results) => results.rows[0]);
  }

  static patchMessageRating(messageid, studentid, newrating) {
    const queryText = 'UPDATE studentratings SET rating = $1 WHERE raterid = $2 AND messageid = $3  RETURNING *;';
    return db.query(queryText,
      [newrating, studentid, messageid]).then((results) => results.rows[0]);
  }

  static deleteMessageRating(studentid, messageid) {
    const queryText = 'DELETE FROM studentratings WHERE studentid = $1 AND messageid = $2;';
    return db.query(queryText, [studentid, messageid]);
  }
}

module.exports = { StudentMessageRatings };
