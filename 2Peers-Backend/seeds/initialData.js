const bcrypt = require('bcrypt');

/** Must be exec'd synhronously for it to work */
async function makeHashedPass(plainTxtPassword) {
  const hash = bcrypt.hashSync(plainTxtPassword, 10);
  return hash;
}

exports.seed = async (knex) => {
  const teacherPassword = 'math';
  const izzyPassword = 'Itzel';
  const jasPassword = 'Jason';
  const dreaPassword = 'Andrea';
  // Deletes ALL existing entries
  await knex('subjects').del();
  await knex('teachers').del();
  await knex('students').del();
  await knex('classes').del();
  await knex('classmembers').del();
  await knex('studentmessages').del();
  await knex('teachermessages').del();
  await knex('studentratings').del();
  await knex('teacherratings').del();

  return knex('subjects').insert([
    {
      name: 'math',
    },
  ])
    .then(() => knex('teachers').insert([
      {
        name: 'math teacher',
        email: 'math@email.com',
        profilePic: '#',
        subject: 1,
        encryptedPassword: makeHashedPass(teacherPassword),
        archived: false,
      },
    ]))
    .then(() => knex('students').insert([
      {
        name: 'izzy',
        email: 'iz@email.com',
        profilePic: '#',
        encryptedPassword: makeHashedPass(izzyPassword),
        archived: false,
      },
      {
        name: 'jas',
        email: 'jas@email.com',
        profilePic: '#',
        encryptedPassword: makeHashedPass(jasPassword),
        archived: false,
      },
      {
        name: 'drea',
        email: 'drea@email.com',
        profilePic: '#',
        encryptedPassword: makeHashedPass(dreaPassword),
        archived: false,
      },
    ]))
    .then(() => knex('classes').insert([
      {
        classcode: 'abc123',
        teacher_id: 1,
      },
    ]))
    .then(() => knex('classmembers').insert([
      {
        student: 1,
        selfrating: 0,
        peerrating: 0,
        class_id: 1,
      },
      {
        student: 2,
        selfrating: 0,
        peerrating: 0,
        class_id: 1,
      },
      {
        student: 3,
        selfrating: 0,
        peerrating: 0,
        class_id: 1,
      },
    ]))
    .then(() => knex('studentmessages').insert([
      {
        student: 1,
        class: 1,
        message: 'Hi',
        date: new Date(),
      },
      {
        student: 2,
        class: 1,
        message: 'Sup',
        date: new Date(),
      },
      {
        student: 3,
        class: 1,
        message: 'Good Morning',
        date: new Date(),
      },
    ]))
    .then(() => knex('teachermessages').insert([
      {
        teacher: 1,
        class: 1,
        message: 'Welcome devs!',
        date: new Date(),
      },
    ]))
    .then(() => knex('studentratings').insert([
      {
        raterid: 2,
        messageid: 1,
        rating: 5,
      },
    ]))
    .then(() => knex('teacherratings').insert([
      {
        raterid: 1,
        messageid: 1,
        rating: 4,
      },
    ]));
};
