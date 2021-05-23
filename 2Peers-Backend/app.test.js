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

// it('Gets the test endpoint', async (done) => {
//   // Sends GET Request to /test endpoint
//   const res = await request.get('/');
//   expect(res.status).toBe(200);
//   done();
// });
