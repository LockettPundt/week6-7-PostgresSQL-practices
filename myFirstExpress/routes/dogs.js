'use strict'

const express = require('express'),
router = express.Router();

const data = [
    { name: 'spot', type: 'cool dog'},
    { name: 'titus', type: 'black dog'}
];


router.get('/', (req, res) => {
    //const hiThere = `<h1 style='font-size: 300px;'>WOOF!</h1>`;
    res.render('template', {
        locals: {
            title: 'Dogs Page',
            dataArray: data
        },
        partials: {
            partial: 'partial-dog'
        }
    })
});


module.exports = router;