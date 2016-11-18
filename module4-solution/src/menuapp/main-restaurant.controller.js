(function () {
'use strict';

angular.module('MenuApp')
.controller('MainRestaurantListController', MainRestaurantListController);


MainRestaurantListController.$inject = ['MenuDataService', 'items'];
function MainRestaurantListController(MenuDataService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();