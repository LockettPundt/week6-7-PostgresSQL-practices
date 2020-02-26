
'use strict'
const express = require('express'),
router = express.Router();



router.get('/', (req, res) => {
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
});

module.exports = router;