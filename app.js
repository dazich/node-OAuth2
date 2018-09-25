
var express = require('express');

var extendAPIOutput = require('./middlewares/apiOutout');
var apiErrorHandle = require('./middlewares/apiErrorHandle');


var app = new express();

app.use(apiErrorHandle);

app.use(extendAPIOutput);

app.get('/', (req, res, next) => {
    res.apiSuccess({data: 123})
})

app.listen(8081, () => console.log('app is running on 8081...'))
