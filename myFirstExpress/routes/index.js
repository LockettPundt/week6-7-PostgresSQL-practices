'use strict'
const express = require('express'),
router = express.Router();



// const rootController = (req, res) => {
//     const snippet = `<h1>hi hi hi<h1>`;
//     res
//         .status(200)
//         .send(snippet)
//         .end();
// };


router.get('/', (req, res) => {
    // const snippet = `<h1>Hello World<h1><br>
    // <a href="localhost:3333/dogs" target="_blank">dogs<a><br>
    // <a href="localhost:3333/cat" target="_blank">cat<a><br>
    // <a href="localhost:3333/together" target="_blank">cats and dogs<a><br>`;


    res.render('template', {
        locals: {
            title: 'Hello World',
        },
        partials: {
            partial: 'partial-index'
        }
    })
})

module.exports = router;