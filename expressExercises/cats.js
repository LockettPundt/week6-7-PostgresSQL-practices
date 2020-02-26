'use strict'

const express = require('express');
const cats = express();

cats.listen(3333, () => {
    console.log('server running on port 4444');
});

const meowController = (req, res) => {
    const snippet = `<h1>meow!!!!<h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
};

cats.get('/cats', meowController);