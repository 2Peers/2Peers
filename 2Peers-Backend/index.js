const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const studentRouter = require('./routes/studentRouter');

app.get('/api', (req, res) => {
  res.send({ message: 'Heyyyyyyyyy' });
});

app.use('/student', studentRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});