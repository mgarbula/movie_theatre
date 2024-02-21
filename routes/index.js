var express = require('express');
var router = express.Router();
const db = require('../public/javascripts/db.js');

router.get('/', function(req, res, next) {
    var queries = `select distinct substring(time, 1, 10) as dates from schedule order by time;
	    select substring(time, 1, 10) as date, substring(time, 12, 5) as time, movies.title, movies.id as movie_id, schedule.id as schedule_id
	    from schedule inner join movies
		where movies.id = schedule.movieId order by time;`;
    db.connect();
    db.query(queries, [1, 2], function(err, data) {
		res.render('main_page', { dates : data[0], movies : data[1] });
		return;
    });
});


module.exports = router;
