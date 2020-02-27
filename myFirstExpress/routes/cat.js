'use strict'

const express = require('express'),
router = express.Router();

const data = [
    { name: 'Sam', color: 'Grey'},
    { name: 'Chloe', color: 'Tabby'}
];

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'CAT PAGE!!',
            someOrOther: data
        },
        partials: {
            partial: 'partial-cat'
        }
    })
});


module.exports = router;