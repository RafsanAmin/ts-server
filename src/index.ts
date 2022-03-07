import express from 'express';

const port = 80 || process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  res.send(`Sample node server!`);
});

app.listen(80, () => {
  console.log(`Server running at port ${port}.`);
});
