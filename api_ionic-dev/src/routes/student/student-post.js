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

    Student.find({name: student.name}).exec().then(function (students) {
        if (students == false)
            student.save(function (err, student) {

                if (err) {
                    console.log(err)
                }

            });
        else{
            console.log("ya existe");
            res.status(404).res('Ya existe');
        }
    });

    Student.find({}).exec().then(function (students) {
        res.json(students).end();
    });
    


});



module.exports = router;

