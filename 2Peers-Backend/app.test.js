/* eslint-disable no-undef */
const superTest = require('supertest');
const app = require('./server');

const request = superTest(app);

it('Posts a test teacher', (done) => {
  request
    .post('/signup')
    .send({
      name: 'Test',
      email: 'Test@gmail.com',
      encryptedpassword: 'Test',
      checkbox: true,
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toStrictEqual({ message: 'signed up as a teacher' });
      return done();
    });
});

it('Posts a test student', (done) => {
  request
    .post('/signup')
    .send({
      name: 'Test',
      email: 'Test@gmail.com',
      encryptedpassword: 'Test',
      checkbox: false,
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toStrictEqual({ message: 'signed up as a student' });
      // extra student test
      return done();
    });
});

const makeClass = (teacher, done) => {
  request.post(`/teachers/${teacher.user.id}/classes`)
    .send({
      code: 'Test',
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toStrictEqual({
        id: res.body.id,
        teacher_id: res.body.teacher_id,
        classcode: 'Test',
      });
      return true;
    });
};

const postMessage = async (student, classData, done) => {
  request.post(`/student/${student.user.id}/message`)
    .send({
      message: 'Test message',
      class: classData.class_id,
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toStrictEqual({
        class: classData.class_id,
        date: res.body.date,
        id: res.body.id,
        message: 'Test message',
        student: student.user.id,
      });
      return true;
    });
};

const joinClass = (student, done) => {
  request.post(`/student/${student.user.id}/classes`)
    .send({
      code: 'Test',
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      postMessage(student, res.body, done);
      expect(res.body).toStrictEqual({
        id: res.body.id,
        class_id: res.body.class_id,
        student: student.user.id,
        selfrating: 0,
        peerrating: 0,
      });
      return true;
    });
};

const patchUser = async (student, done) => {
  request.patch(`/student/${student.user.id}`)
    .send({
      name: 'Test',
      email: 'Testing@gmail.com',
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toStrictEqual({
        id: res.body.id,
        archived: false,
        email: 'Testing@gmail.com',
        encryptedpassword: res.body.encryptedpassword,
        name: 'Test',
        profilepic: res.body.profilepic,
      });
      return true;
    });
};

const getPeerRating = async (student, done) => {
  request.post(`/student/${student.user.id}/rating`)
    .send({
      classcode: 'Test',
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).toStrictEqual({
        rating: res.body.rating || null,
      });
      return true;
    });
};

it('Test teacher routes', (done) => {
  request.post('/signin')
    .send({
      name: 'Test',
      email: 'Test@gmail.com',
      encryptedpassword: 'Test',
      checkbox: true,
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      const teacher = res.body;
      makeClass(teacher, done);
      expect(res.body).toStrictEqual({
        user: {
          id: res.body.user.id,
          name: 'Test',
          email: 'Test@gmail.com',
          profilepic: 'https://i.pinimg.com/originals/56/b4/9f/56b49f8fe357deecf54ad7805209d79e.png',
          subject: null,
          encryptedpassword: res.body.user.encryptedpassword,
          archived: false,
        },
        valid: true,
        role: 'teacher',
        checkbox: true,
      });
      return done();
    });
  done();
});

it('Test student routes', (done) => {
  request.post('/signin')
    .send({
      name: 'Test',
      email: 'Test@gmail.com',
      encryptedpassword: 'Test',
      checkbox: false,
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      const student = res.body;
      joinClass(student, done);
      patchUser(student, done);
      getPeerRating(student, done);
      expect(res.body).toStrictEqual({
        user: {
          id: res.body.user.id,
          name: 'Test',
          email: 'Test@gmail.com',
          profilepic: 'https://www.pngitem.com/pimgs/m/77-778738_transparent-indian-elephant-png-cartoon-elephant-side-view.png',
          encryptedpassword: res.body.user.encryptedpassword,
          archived: false,
        },
        valid: true,
        role: 'student',
        checkbox: false,
      });
      return done();
    });
});
