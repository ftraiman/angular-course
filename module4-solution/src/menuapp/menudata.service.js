(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$http']
function MenuDataService($q, $http) {
  var service = this;

  var categories = [];
  var catItems = [];

  service.getAllCategories = function () {
    var deferred = $q.defer();

    var promise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

    promise.then(function (response) {
      for (var index = 0; index < response.data.length; index++) {
        var element = response.data[index];
        categories.push(element);
      }
      categories.push(response.data);
    });
    deferred.resolve(categories);

    return deferred.promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    catItems = [];

    var promise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
    });

    promise.then(function (response) {
      for (var index = 0; index < response.data.menu_items.length; index++) {
        var element = response.data.menu_items[index];
        catItems.push(element);
      }
    });
    return catItems;
  };
}

})();