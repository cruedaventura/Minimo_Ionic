/**
 * Created by carol on 23/05/16.
 */
var express = require('express');
var router  = express.Router();

var Student = require('./../../models/student');

router.post('/student', function(req, res, next) {
    var student = new Student(
        {
            name: req.body.name,
            address: req.body.address,
            phones: req.body.phones,
        }
    );

    student.save(function (err, student) {
        if (err) return console.error(err);
    });

    Student.find({}).exec().then(function (students) {
        res.json(students).end();
    });

    //res.json(user.toObject());


});



module.exports = router;

