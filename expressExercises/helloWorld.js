'use strict'

const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('serving on port 3333');
});

const rootController = (req, res) => {
    const snippet = `<h1>Hello WORLD!<h1>`;
    res
        .status(200)
        .send(snippet)
        .end();
};




app.get('/', rootController);

