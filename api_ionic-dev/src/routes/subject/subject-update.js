/**
 * Created by carol on 15/04/16.
 */
var express = require('express');
var router  = express.Router();

var Subject = require('./../../models/subject');

router.put('/subject/update', function(req, res, next) {
    var subject = new Subject(
        {
            name: req.body.name,
            students: req.body.students
        }
    );

    Subject.findOneAndUpdate({name: subject.name},{$push:{students: subject.students}} ,{upsert: true},function (err, subject) {
        if (err) return console.error(err);
    });

    //res.json(user.toObject());

    Subject.find({}).exec().then(function (subjects) {

        res.json(subjects).end();
    });
});

module.exports = router;