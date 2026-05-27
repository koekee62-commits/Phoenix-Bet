const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Phoenix Bet System is Running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
