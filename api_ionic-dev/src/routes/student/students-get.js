/**
 * Created by carol on 23/05/16.
 */
var express = require('express');
var router  = express.Router();

var Student = require('./../../models/student');

router.get('/students', function(req, res, next) {
    Student.find({}).exec().then(function (students) {
        res.json(students).end();
    });
});

module.exports = router;