const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
<<<<<<< HEAD
    res.send({ message: "Heyyyyyyyyy" });
  });
=======
  res.send({ message: 'Heyyyyyyyyy' });
});
>>>>>>> main
