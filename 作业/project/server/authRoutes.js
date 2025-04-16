const express = require('express');
const authenticate = require('./auth');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = authenticate(username, password);

    if (user) {
        res.sendFile(path.join(__dirname, '../public/welcome.html'));
    } else {
        res.status(401).send('用户名或密码错误');
    }
});

module.exports = router;