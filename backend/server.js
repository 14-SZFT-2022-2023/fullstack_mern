require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware-k
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route-ok
app.use('/', require('./routes/mainRoutes'));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
