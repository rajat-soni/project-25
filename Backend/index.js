const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

var cors = require('cors')
const app = express();

// Set EJS as the templating engine

app.use(cors())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json());  // For parsing JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));  // For parsing URL-encoded data

// Routes
app.use('/api', userRoutes);

// Render the homepage with the user creation form
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 3000');
});

