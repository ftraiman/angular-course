(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'MenuDataService'];
function ItemDetailController($stateParams,  MenuDataService) {
  var idc = this;
  idc.items = [];
  idc.items = MenuDataService.getItemsForCategory($stateParams.itemId);
}
})();