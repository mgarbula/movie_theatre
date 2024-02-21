var express = require('express');
var router = express.Router();
const db = require('../public/javascripts/db.js');

router.get('/', function(req, res, next) {
    res.render('add_movie');
});

router.post('/', function (req, res, next) {
    const title = req.body.title;
    const director = req.body.director;
    const length = parseInt(req.body._length);
    const year = parseInt(req.body.year);
    const descr = req.body.description;
    const path = req.body.path;
    var addQuery = `insert into movies (
        title, director, length, year, description, path_to_file
    ) values (
        ?, ?, ?, ?, ?, ?
    );`;
    db.connect();
    db.query(addQuery, [title, director, length, year, descr, path], function (err, data) {
        if (err) {
            res.send('Błąd! ' + err);
            db.end();
            return;
        } else {
            res.render('done',  { text : 'Dodano film do bazy!' });
            return;
        }
    });
});

module.exports = router;
