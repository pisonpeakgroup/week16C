
var newCtrl = require('./../contrrollers/newController');

// A major function (Class) with CRUD route methods
var newRoute = function (router) {    
      router.route('/')
         .get(newCtrl.getAll)
         

      router.route('/users/:userId')
         .get(newCtrl.get)
         .put(newCtrl.update)
         .delete(newCtrl.remove);

      router.route('/users/:userFirstname')
         .get(newCtrl.get)
         .put(newCtrl.update)
         .delete(newCtrl.remove);

      router.route('/users/:userNationality')
         .get(newCtrl.get)
         .put(newCtrl.update)
         .delete(newCtrl.remove);
      
      router.route('/users/:userlastname')
         .get(newCtrl.get)
         .put(newCtrl.update)
         .delete(newCtrl.remove);
}

module.exports = newRoute;
