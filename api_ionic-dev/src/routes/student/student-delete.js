/**
 * Created by carol on 23/05/16.
 */
var express = require('express');
var router  = express.Router();

var Student = require('./../../models/student');

router.delete('/student/delete/:name', function(req, res, next) {

    var student = new Student(
        {
            name:   req.params.name
        }
    );

    Student.find({name:student.name},(function (err, student) {

        if (err) return console.error(err);

    })).remove().exec();

    Student.find({}).exec().then(function (students) {
        res.json(students).end();
    });
});

module.exports = router;
