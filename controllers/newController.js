var newUser = require("./../model/newUser");

var newCtrl = {
    create: function(req, res) {
        var body = req.body;

        var user = new User(body);
        user.save(function(err, _user) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(_user);
            }
        });
    },

    get: function (req, res) {
        var id = req.params.userId;

        User.findById(id, function(err, user) {
            if (err) {
                res.status(500).send(err);
            } else if (!user) {
                res.status(404).send("User does not exist.");
            } else {
                res.status(200).send(user);
            }
        })
    },

    get: function (req, res) {
        var lastName = req.params.userlastName;

        User.findBylastName(lastName, function(err, user) {
            if (err) {
                res.status(500).send(err);
            } else if (!user) {
                res.status(404).send("User does not exist.");
            } else {
                res.status(200).send(user);
            }
        })
    },

    getAll: function (req, res) {
        User.find({}, function(err, users) {
            if(err) {
                res.stat(500).send(err);
            } else {
                res.status(200).send(users);
            }
        });
    },

    get: function (req, res) {
        var Nationality = req.params.userNationality;

        User.findByNationality(Nationality, function(err, user) {
            if (err) {
                res.status(500).send(err);
            } else if (!user) {
                res.status(404).send("User does not exist.");
            } else {
                res.status(200).send(user);
            }
        })
    },

    get: function (req, res) {
        var Firstname = req.params.userFirstname;

        User.findByFirstname(Firstname, function(err, user) {
            if (err) {
                res.status(500).send(err);
            } else if (!user) {
                res.status(404).send("User does not exist.");
            } else {
                res.status(200).send(user);
            }
        })
    },

    update: function (req, res) {
        var id = req.params.userId;
        var body = req.body;

        User.findById(id, function(err, user) {
            if (err) {
                res.status(500).send({message: 'An error occurred when updating the user.'});
            } else if (!user) {
                res.status(404).send({ message: 'A user with that id does nto exist.'});
            } else {
                user.lastName = body.lastName;
                user.firstName = body.firstName;
                user.dob = body.dob;
                user.save(function(err, _user) {
                    if (err) {
                        res.status(500).send({ message: 'An error occurred when saving changes to the user.'})
                    } else {
                        res.status(200).send(_user);
                    }
                });
            }
        });
    },

    remove: function (req, res) {
        const id = req.params.id;

        User.findByIdAndRemove(function(err) {
            if (err) {
                res.status(500).send({ message: 'An error occurred when removing this user.'});
            } else {
                res.status(200).send({ message: 'USer successfully removed.'});
            }
        })
    }
}

module.exports = newCtrl;
