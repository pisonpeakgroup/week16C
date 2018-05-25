// a dependency
var mongoose = require('mongoose');


// newUser model schema
var Schema = mongoose.Schema;

var newSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    dob: {
        type: Date
    },
    nationality: {
        type: Date
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.export = mongoose.model('newUser', newSchema);
