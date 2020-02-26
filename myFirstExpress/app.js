'use strict'

const express = require('express');
const app = express();


app.listen(3333, () => {
    console.log('Server running on 3333');
});

const rootController = require('./routes/index'),
    meowController = require('./routes/cat'),
    woofController = require('./routes/dogs'),
    woofMeow = require('./routes/together'),
    personController = require('./routes/person');

app.use('/together', woofMeow);
app.use('/cat', meowController);
app.use('/dogs', woofController);
app.use('/', rootController);
app.use('/person', personController);
