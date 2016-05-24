/**
 * Created by carol on 15/04/16.
 */
var express = require('express');
var router  = express.Router();

var Subject = require('./../../models/subject');

router.delete('/subject/delete/:name', function(req, res, next) {

    var subject = new Subject(
        {
            name:   req.params.name
        }
    );

    Subject.find({name:subject.name},(function (err, subject) {

        if (err) return console.error(err);

    })).remove().exec();

    Subject.find({}).exec().then(function (subjects) {
        res.json(subjects).end();
    });
});

module.exports = router;
