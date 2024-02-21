var express = require('express');
var router = express.Router();
const db = require('../public/javascripts/db.js');

router.get('/', function(req, res, next) {
    var queries = `select id, title from movies; select id, name from halls;`;
    db.connect();
    db.query(queries, [1, 2], function(err, data) {
        res.render('add_schedule', { movies : data[0], halls : data[1] });
        // db.end();
        return;
    });
});

router.post('/', function(req, res, next) {
    var movieId = parseInt(req.body.movie_id);
    var date = req.body._date;
    var time = req.body._time;
    var hallId = parseInt(req.body.hall_id);
    var dateTime = date + ' ' + time + ':00';
    // triggerem dodaję wolne miejsca
    var addQuery = `insert into schedule (
        time, movieId, hall_id
    ) values (
        ?, ?, ?
    );`;
    console.log('movieId ' + movieId);
    console.log('hallId ' + hallId);
    console.log('datetime ' + dateTime);
    db.connect();
    db.query(addQuery, [dateTime, movieId, hallId], function (err, data) {
        if (err) {
            res.send('Błąd: ' + err);
        } else {
            res.render('done', { text : 'Dodano film do repertuaru!' });
        }
        //db.end();
        return;
    });
});

module.exports = router