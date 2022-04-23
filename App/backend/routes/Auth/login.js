const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var d = new Date();
var greeting;
var time = d.getHours();

if (time < 12) {
    greeting = 'Good morning!';
}
if (time > 12) {
    greeting = 'Good afternoon!';
}

router.post('/', jsonParser, async (req, res) => {
    const { email, password } = req.body;
    if (email == 'dharan731@gmail.com' && password == 'test123') {
        res.json({
            status: 'OK',
            name: 'A2Z Farms',
            time: greeting,
        });
    } else {
        res.json({
            status: 'error',
            error: 'Invalid username/password',
        });
    }
});

module.exports = router;
