const express = require('express');
const cors = require('cors');

const app = express();

const appRouter = require('./routes/appRouter');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const classroomRouter = require('./routes/classroomRouter');
const messageRouter = require('./routes/messageRouter');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', appRouter);
app.use('/student', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomRouter);
app.use('/messages', messageRouter);

module.exports = app;
