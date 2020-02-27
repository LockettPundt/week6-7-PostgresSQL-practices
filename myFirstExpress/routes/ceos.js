'use strict'

const express = require('express'),
    router = express.Router(),
    ceoModel = require(`../models/ceoModel`);

router.get('/:id?', async (req, res) => {
    const {
        id
    } = req.param;
    let executiveData = [];
    let dir;
    //const executiveData = await ceoModel.getAll();
    if (!!id) {
        executiveData = await ceoModel.getById(id);
    } else {
        executiveData = await ceoModel.getAll();
    }

    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            arrayOfData: executiveData,
        },
        partials: {
            partial: 'partial-ceos'
        }
    })
});


module.exports = router;