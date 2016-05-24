/**
 * Created by carol on 15/04/16.
 */
var express = require('express');
var router  = express.Router();

var Subject = require('./../../models/subject');
var Student = require('./../../models/student');

router.get('/subjects', function (req, res) {

    Subject.find({}, function (err, subjects) {
        Student.populate(subjects, {path: "students"}, function (err, subjects) {
            res.status(200).send(subjects);
        });


    });
});

router.get('/assignaturabyname/:name', function (req, res) {
    var subject = new Subject(
        {
            name: req.params.name
        }
    );
    Subject.find({name: subject.name}, function (err, subjects) {
        Student.populate(subjects, {path: "students"}, function (err, subjects) {
            res.status(200).send(subjects);
        });


    });

});


module.exports = router;