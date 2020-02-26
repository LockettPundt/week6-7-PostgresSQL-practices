'use strict'
const express = require('express'),
router = express.Router();


router.get('/', (req, res) => {
    //having the .get('/:name?/:age?/etc will be for parameters.
    //console.log('query parameters are', req.params);
    //queries are accessed by a ? after the route name and ?foo=bar&baz=yahoo.
    const {name, age, lastname, loc} = req.query;
    //const {name, age, lastname} = req.params;
    const greeting = !!name ? `<h1> Hi ${name}!!!<h1>` : `<h1>I'm not sure who you are?<h1>`;
    const ageInfo = !!age ? `<h1>You were born in ${2020 - age}.` : `<h1>How old you are?<h1>`;
    const location = !!loc ? `<h1>You are located in ${loc}.` : `<h1>Where are you located?<h1>`;
    res.status(200).send( 
        greeting + ageInfo + location
    ).end();

});

module.exports = router;