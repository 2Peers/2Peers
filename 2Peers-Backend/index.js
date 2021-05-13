const express = require('express');
const teacherRouter = require('./routes/teacherRouter');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
  res.send({ message: 'Heyyyyyyyyy' });
});

app.use('/teachers', teacherRouter);
