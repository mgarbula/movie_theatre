var express = require('express');
var router = express.Router();
const db = require('../public/javascripts/db.js');
const getTime = require('../public/javascripts/time.js');

var queryData;

router.get('/:movie_id/schedule/:schedule_id', function(req, res, next) {
    var queries = `select title, path_to_file, description from movies where id = ${req.params.movie_id};
    select time, seats from schedule where id = ${req.params.schedule_id};
    set @hall = (select hall_id from schedule where id = ${req.params.schedule_id});
    select rows_number, columns_number from halls where id = @hall;`
    db.connect();
    db.query(queries, [1, 2, 3, 4], function(err, data) {
        if (err) {
            console.log(err);
        } else {
            queryData = data;
            res.render('movie_hall', { movie_info : data[0][0], schedule_info: data[1][0], time : getTime(data[1][0].time), hall : data[3][0], currentPath : `${req.params.schedule_id}/seat/` });
        }
        return;
    });
});

router.get('/:movie_id/schedule/:schedule_id/seat/:seat_id', function(req, res, next) {
    res.render('movie_reservation', { movie_info : queryData[0][0], schedule_info: queryData[1][0], time : getTime(queryData[1][0].time), seatNumber : req.params.seat_id });
});

router.post('/:movie_id/schedule/:schedule_id/seat/:seat_id', function(req, res, next) {
    var newSeats = queryData[1][0].seats.substring(0, req.params.seat_id - 1) + '0' + queryData[1][0].seats.substring(req.params.seat_id);
    var query = `update schedule set seats = '${newSeats}' where id = ${req.params.schedule_id}`;
    db.connect();
    db.query(query, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render('done', { text : 'Zarezerwowano miejsce!' });
        }
        return;
    });
});

module.exports = router;