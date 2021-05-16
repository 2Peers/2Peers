const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

const appRouter = require('./routes/appRouter');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', appRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
