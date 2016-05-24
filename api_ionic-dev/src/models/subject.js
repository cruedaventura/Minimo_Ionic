/**
 * Created by carol on 23/05/16.
 */
var mongoose = require('mongoose');
var Student = require('../models/student');
var Student = mongoose.model('Student');

var SubjectSchema = mongoose.Schema({

    name: {type: String, required:true},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

var Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;