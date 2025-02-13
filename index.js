const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(
  {
    origin: '*',
    methods: ['GET', 'POST'],
  }
));

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is working!',
  });
});

app.post('/api/login', (req, res) => {
  require('./routes/login.js')(req, res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});