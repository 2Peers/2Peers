const db = require('../database/db');

class TeacherMessageRating {
  static getMessageRating(messageid, teacherid) {
    const queryText = 'SELECT * FROM teacherratings WHERE messageid = $1 AND raterid = $2';
    return db.query(
      queryText, [Number(messageid), Number(teacherid)],
    ).then((results) => results.rows[0]);
  }

  static postMessageRating(messageid, teacherid, rating) {
    const queryText = 'INSERT INTO teacherratings (raterid, messageid, rating) VALUES ($1, $2, $3);';
    return db.query(queryText, [teacherid, messageid, rating]);
  }

  static getAvgMessageRatings(id) {
    const queryText = 'SELECT AVG(rating) FROM teacherratings WHERE messageid = $1;';
    return db.query(queryText, [Number(id)]).then((results) => results.rows[0]);
  }

  static patchMessageRating(messageid, teacherid, newrating) {
    const queryText = 'UPDATE teacherratings SET rating = $1 WHERE raterid = $2 AND messageid = $3  RETURNING *;';
    return db.query(queryText,
      [newrating, teacherid, messageid]).then((results) => results.rows[0]);
  }

  static deleteMessageRating(teacherid, messageid) {
    const queryText = 'DELETE FROM teacherratings WHERE raterid = $1 AND messageid = $2;';
    return db.query(queryText, [teacherid, messageid]);
  }
}

module.exports = { TeacherMessageRating };
