const db = require('../database/db');

class Student {
    // INSERT INTO studentMessages (student, class, message, messageRating, date) VALUES (1, 1, "Some Message", 3, now());

    static addMessage(details, id) {
        const {message, messagerating} = details;
        const queryText = 'INSERT INTO studentmessages (student, class, message, messagerating, date) VALUES ($1, $2, $3, $4, NOW()) RETURNING *;'
        debugger
        return db.query(queryText, [Number(id), Number(details.class), message, Number(messagerating)]).then(results => results.rows[0]);
    }
}

module.exports = {Student}