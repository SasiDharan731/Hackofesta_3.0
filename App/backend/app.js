const express = require('express');
const login = require('./routes/Auth/login.js');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/login', login);

app.listen(3002, () => {
    console.log('Server running on port 3002');
});
