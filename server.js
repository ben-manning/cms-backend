import express from 'express';

const app = express();

// routes
app.get('/', (req, res) => {
  res.send('hello application!');
});

app.listen(3000, () => {
  console.log('this app is now running');
});