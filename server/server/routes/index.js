var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();

router.use(cors());

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'davkimfray',
    password: 'davkimfray',
    database: 'seminar'
});


connection.connect();








/* User Authenticate*/
router.post('/authenticate', function (req, res) {
    connection.query('SELECT * FROM student WHERE username = ? AND password = ?', [req.body.username, req.body.password],  function (error, results, fields) {
        if (error) throw error;
        console.log(req.body);
        console.log(results.length + JSON.stringify({data: results}));
        //console.log(error.status());
        if (results.length === 1) {
            // if login details are valid return status 200 OK with user details and fake jwt token
            let body = {
                userId: results[0].studentId,
                username: results[0].username,
                password: results[0].password,
                token: 'fake'
            };
            res.send({status: 200, body: body});
        } else {
           res.status(401).send('incorect');
            //res.send({status: 401});
             // return error({status: 401, error: {message: 'Unauthorised'}});
        }

    });
    //res.render('index', { title: 'Express' });
});


/* User registration*/
router.post('/user/register', function (req, res) {
    connection.query('INSERT INTO student(f_name, l_name, m_name, gender, reg_no, courseId, collegeId, username, password)' +
        ' VALUES (?,?,?,?,?,?,?,?,?)', [
        req.body.firstName, req.body.surName, req.body.midName, req.body.gender,
        req.body.regNo, req.body.course,  req.body.college, req.body.username, req.body.password
    ], function (error, results, fields) {
        if (error) throw error;
        console.log(req.body);
        console.log(JSON.stringify({data: results}));
        //console.log(error.status());
       // success send status
        res.send({status: 200});

    });
    //res.render('index', { title: 'Express' });
});


/* get all college*/
router.get('/college', function (req, res, next) {

    console.log(req.query.cou_year);
    //connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [req.query.username, 'a'],  function (error, results, fields) {
    connection.query('SELECT * FROM college',  function (error, results, fields) {
        if (error) throw error;
        console.log(req.query);
        console.log(JSON.stringify({status: 200, body: results}));

        res.send(JSON.stringify(results));
    });
    //res.render('index', { title: 'Express' });
});



/* get course by id*/
router.get('/course/id', function (req, res, next) {

    //connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [req.query.username, 'a'],  function (error, results, fields) {
    connection.query('SELECT * FROM course WHERE year = ?', [req.query.couYear], function (error, results, fields) {
        if (error) throw error;
        console.log(req.query);
        console.log(JSON.stringify({status: 200, body: results}));

        res.send(JSON.stringify(results));
    });
    //res.render('index', { title: 'Express' });
});


/* GET seminars by student Id page. */
router.get('/seminar', function (req, res, next) {
     connection.query('SELECT s.*, c.*, t.*, v.* FROM `seminars` AS s, course AS c, teacher AS t, venue AS v,' +
         ' stu_sem_reg AS ss  WHERE s.courseId = c.courseId AND s.teacherId = t.teacherId AND s.venueId = v.venueId' +
         ' AND s.seminarId = ss.seminarId    AND ss.studentId = ?', [1],  function (error, results, fields) {
         if (error) throw error;
         console.log(req.query);
         console.log(JSON.stringify({status: 1, data: results}));
         res.send(JSON.stringify(results));
     });
    //res.render('index', { title: 'Express' });
});

/* GET seminars by course Id page. */
router.get('/seminar/courseId', function (req, res, next) {
    connection.query('SELECT s.*, c.*, t.*, v.* FROM `seminars` AS s, course AS c, teacher AS t, venue AS v ' +
        'WHERE s.courseId = c.courseId AND s.teacherId = t.teacherId AND s.venueId = v.venueId AND s.courseId = ?',
        [req.query.courseId],  function (error, results, fields) {
        if (error) throw error;
        console.log(req.query);
        console.log(JSON.stringify({status: 1, data: results}));
        res.send(JSON.stringify(results));
    });
    //res.render('index', { title: 'Express' });
});

module.exports = router;
