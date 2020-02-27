'use strict'

const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(3333, () => {
    console.log('Server running on 3333');
});

app.use(express.static('public'));

const rootController = require('./routes/index'),
    meowController = require('./routes/cat'),
    woofController = require('./routes/dogs'),
    woofMeow = require('./routes/together'),
    weatherController = require('./routes/weather'),
    personController = require('./routes/person'),
    ceosController = require('./routes/ceos');

app.use('/together', woofMeow);
app.use('/cat', meowController);
app.use('/dogs', woofController);
app.use('/', rootController);
app.use('/person', personController);
app.use('/weather', weatherController);
app.use('/ceos', ceosController);
