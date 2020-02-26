'use strict'
const express = require('express');
const together = express();

together.listen(3333, ()=> {
    console.log('serving on port 3333');
});


const woofMeow = (req, res) => {
    const togetherAtLast = `
    <h1>meow!!!<h1>
    <h1>woof!!!<h1>
    <h1>meow!!!<h1>
    <h1>woof!!!<h1>
    <h1>meow!!!<h1>
    <h1>woof!!!<h1>
    <h1>meow!!!<h1>
    <h1>woof!!!<h1>
    <h1>meow!!!<h1>
    <h1>woof!!!<h1>
    <h1>meow!!!<h1>
    <h1>woof!!!<h1>
    `
    res
    .status(200)
    .send(togetherAtLast)
    .end();

}

together.get('/cats_and_dogs', woofMeow);