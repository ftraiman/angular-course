(function () {
"use strict";

angular.module('public')
.controller('YourInfoController', YourInfoController);

YourInfoController.$inject = ['user'];
function YourInfoController(user) {
  var ctrl = this;
  ctrl.user = user;
  //console.log("User ", user);
  console.log(user.dishSelected);
  ctrl.dish = user.dishSelected;


  


}

})();
