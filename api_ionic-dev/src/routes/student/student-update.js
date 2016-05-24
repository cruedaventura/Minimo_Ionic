var express = require('express');
var router  = express.Router();

var Student = require('./../../models/student');

router.put('/student/update', function(req, res, next) {
    var student = new Student(
        {
            name: req.body.name,
            address: req.body.address,
            phones: req.body.phones
        }
    );

    Student.findOneAndUpdate({name: student.name},{$push:{phones: student.phones}} ,function (err, student) {
        if (err) return console.error(err);
    });

    //res.json(user.toObject());

    Student.find({}).exec().then(function (students) {

        res.json(students).end();
    });
});

module.exports = router;