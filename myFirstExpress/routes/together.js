'use strict'
const express = require('express'),
router = express.Router();

const meowWoofGenerator = (sound) => {
    let i = 0;
    let arr = [];
    let blank = sound.includes('M') ? 'M' : 'W';
    while (i < 30) {
        arr.push(`<p style='color:green;'>${blank.repeat(i)}${sound}<p> `)
        i++;
    }
    return arr.join('');
}

router.get('/', (req, res) => {

   
    res.render('template', {
        locals: {
            title: 'Together at last!',
            meow: meowWoofGenerator("MEOW"),
            woof: meowWoofGenerator("WOOF")
        },
        partials: {
            partial: 'partial-together'
        }
    })
});

module.exports = router;