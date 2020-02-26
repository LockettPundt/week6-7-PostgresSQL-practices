'use strict'

const express = require('express');
const dogs = express();

dogs.listen(3333, () => {
    console.log('serving on port 3333');
});

const woofController = (req, res) => {
    const hiThere = `<h1 style='font-size: 300px;'>WOOOOOFFF!</h1>`;
    res
        .status(200)
        .send(hiThere)
        .end();
}

dogs.get('/dogs', woofController);