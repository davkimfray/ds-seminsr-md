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


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "secretkey12345";


connection.connect();








/* User Authenticate*/
router.post('/authenticate', function (req, res) {

    var userId;
    var resultNo;
    connection.query('SELECT s.*, c.* FROM student AS s, college AS c WHERE s.collegeId = c.collegeId AND s.reg_no = ?', [req.body.username],  function (error, user, fields) {
        if (error) throw error;
        console.log(user.length);
        if (!user.length) return res.status(401).send('incorrect');
        const results = bcrypt.compareSync(req.body.password, user[0].password);
        if (!results) return res.status(401).send('incorrect');
        // if login details are valid return status 200 OK with user details and fake jwt token
        const expiresIn = 60 * 60;
        const accessToken = jwt.sign({id: user.studentId}, SECRET_KEY, {expiresIn: expiresIn});

         res.status(200).send({"user": user, "access_token": accessToken, "expires_in": expiresIn});

            //res.send({status: 401});
             // return error({status: 401, error: {message: 'Unauthorised'}});

    });
});

/* User registration*/
router.post('/user/register', function (req, res) {

    //encrypt password
    const password = bcrypt.hashSync(req.body.password);

    //query to insert
    connection.query('INSERT INTO student(f_name, l_name, m_name, gender, reg_no, courseId, collegeId, username, password)' +
        ' VALUES (?,?,?,?,?,1,?,?,?)', [
        req.body.firstName, req.body.surName, req.body.midName, req.body.gender,
        req.body.regNo,  req.body.college, req.body.username, password
    ], function (error, results, fields) {
        if (error) throw error;
        console.log(req.body);
        console.log(JSON.stringify({data: results}));
       // success send status
        res.send({status: 200});

    });
    //res.render('index', { title: 'Express' });
});


/* get all college*/
router.get('/college', function (req, res, next) {

    console.log(req.query.cou_year);
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
router.get('/seminar/studentId', function (req, res, next) {
     connection.query('SELECT s.*, c.*, t.*, v.* FROM `seminars` AS s, course AS c, teacher AS t, venue AS v,' +
         ' stu_sem_reg AS ss  WHERE s.courseId = c.courseId AND s.teacherId = t.teacherId AND s.venueId = v.venueId' +
         ' AND s.seminarId = ss.seminarId    AND ss.studentId = ?', [req.query.studentId],  function (error, results, fields) {
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



/* student seminar registration*/
router.post('/seminar/regSeminar', function (req, res) {

    //check if seminar is registered
    connection.query('SELECT * FROM stu_sem_reg AS ssr, seminars AS s  WHERE ssr.seminarId = s.seminarId ' +
        'AND s.courseId = ? AND studentId = ? AND courseENDED = ?',
        [req.body.couId, req.body.studId, 0],
        function (error, results, fields) {
            if (error) throw error;

            // If not register seminar
            if (results.length < 1) {
                connection.query('INSERT INTO stu_sem_reg(seminarId, studentId)' +
                    ' VALUES (?,?)', [req.body.semId, req.body.studId],
                    function (error, results, fields) {
                        if (error) throw error;

                        // success send status
                        res.send({status: 200});
                    });
            }else {
                // send error status that seminar is registered
                res.send({status: 401});
            }
    });
});


// teacher sideeeeeeeeeeeeeeeeeeeeee

//all students
router.get('/student/all', function (req, res, next) {

    connection.query('SELECT * FROM student',  function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});



module.exports = router;
