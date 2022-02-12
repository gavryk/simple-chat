const express = require('express');
const app = express();

const rooms = {
    'rooms': [],
    'messages': []
}

app.get('/users', function(req, res) {
    res.send('response');
});

app.listen(6666)