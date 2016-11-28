(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService', 'RegistrationService'];
function RegistrationController(MenuService, RegistrationService) {
  var reg = this;
  reg.user = {};
  reg.user.valid = undefined;

  reg.submit = function () {
    console.log("Usuario: ", reg.user);

    var promise = MenuService.getDish(reg.user.dish).then(function(response){
        reg.user.dishSelected = response.data;
        reg.user.valid = true;
    }).catch(function(e) {
        console.log("Mierda ", e); // "oh, no!"
        reg.user.valid = false;
    });

    RegistrationService.setUser(reg.user);
    reg.completed = true;
  };
}

})();