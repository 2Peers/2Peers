const db = require('../database/db');

class Student {
    // INSERT INTO studentMessages (student, class, message, messageRating, date) VALUES (1, 1, "Some Message", 3, now());

    static addMessage(details, id) {
        const {student, message, messageRating} = details
        const queryText = 'INSERT INTO studentmessages (student, class, message, messageRating, date) VALUES ($1, $2, $3, $4, NOW()) RETURNING *;'
        return db.query(queryText, [student, details.class, message, messageRating]).then(results => results.rows[0]);
    }
}

module.exports = {Student}