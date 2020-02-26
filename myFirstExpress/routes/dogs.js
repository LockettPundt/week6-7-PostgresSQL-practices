'use strict'

const express = require('express'),
router = express.Router();


router.get('/', (req, res) => {
    const hiThere = `<h1 style='font-size: 300px;'>WOOOOOFFF!</h1>`;
    res
        .status(200)
        .send(hiThere)
        .end();
});


module.exports = router;