var Validations = {
    userCreationValidations: function(req, res, next) {
      var body = req.body;
  
      if (!body.firstName) {
        res.status(400).send({ message: 'A first name is required.'});
      } else if (!body.lastName) {
        res.status(400).send({ message: 'A lastname is required.'});
      } else if (body.password.length < 6) {
        res.status(400).send({ message: 'A password length must be 6 or more characters.'});
      } else if (!body.nationality){
        res.status(400).send({ message: 'A Nationality is required.'});
      } else if(!body.email){
        res.status(400).send({ message: 'You forgot the email part, it is required.'});
      } else if(!body.dob){
        res.status(400).send({ message: 'Please kindly include your date of birth, it is required.'});
      } else if(body.body){
        res.status(400).send({ message: 'Congratulations, your data was entered correctly!.'});
        next();
      }
    }
  }
  
  
  
  module.exports = Validations;
