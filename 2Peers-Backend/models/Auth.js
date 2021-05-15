const db = require('../database/db');

class Auth {
  static studentSignUp(body) {
    const queryStudent = 'INSERT INTO students (name, email, profilepic, encryptedpassword, archived) VALUES ($1, $2, $3, $4, $5)';
    const studentPic = 'https://www.pngitem.com/pimgs/m/77-778738_transparent-indian-elephant-png-cartoon-elephant-side-view.png';
    const archived = false;

    return db.query(
      queryStudent, [body.name, body.email, studentPic, body.encryptedpassword, archived],
    );
  }

  static teacherSignUp(body) {
    const queryTeacher = 'INSERT INTO teachers (name, email, profilepic, encryptedpassword, archived) VALUES ($1, $2, $3, $4, $5)';
    const teacherPic = 'https://i.pinimg.com/originals/56/b4/9f/56b49f8fe357deecf54ad7805209d79e.png';
    const archived = false;

    return db.query(
      queryTeacher, [body.name, body.email, teacherPic, body.encryptedpassword, archived],
    );
  }
}

module.exports = { Auth };
