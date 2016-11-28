(function () {

angular.module('public')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  service.user = {};
  service.setUser = function(user) {
    service.user = user;
  };
}
})();