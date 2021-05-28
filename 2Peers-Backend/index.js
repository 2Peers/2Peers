const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server)
const PORT = process.env.PORT || 8000;

const appRouter = require('./routes/appRouter');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const classroomRouter = require('./routes/classroomRouter');
const messageRouter = require('./routes/messageRouter');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

io.on('connection', (socket) => {
  console.log('a user is connected');
  socket.send('USER CONNECTED')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
});

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(msg);
  });
  socket.emit("msg", (msg)=> {
    console.log(msg);
  });
})

app.use('/', appRouter);
app.use('/student', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomRouter);
app.use('/messages', messageRouter);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
