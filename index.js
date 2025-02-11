const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// function to handle user signup

app.post('/signup', (req, res) => {  
  console.log('User signed up:', req.body);
  res.status(201).send('User signed up successfully');
});

// function to validate data

app.post('/validate', (req, res) => {
  const { username, password, email } = req.body;

    if (!username) {
      return res.status(400).send('Username is required');
    }
    
    if (!email) {
      return res.status(400).send('Email cannot be empty');
    }
    
    if (!password || password.length < 8 || password.length > 16) {
      return res.status(400).send('Password length should be greater than 8 and less than 16');
    }
  

  res.status(200).send('Data is valid');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});