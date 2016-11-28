(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getDish = function (dish) {
    var config = {};
    console.log("Url : ", ApiPath + '/menu_items/'+dish+'.json');
    return $http.get(ApiPath + '/menu_items/'+dish+'.json');
  };

  service.getDishExist = function (dish) {
    var config = {};
    console.log("Url : ", ApiPath + '/menu_items/'+dish+'.json');
    return $http.get(ApiPath + '/menu_items/'+dish+'.json').then(function (response) {
      console.log("response: ", response);
      return true;
      //return response.data;
    }).catch(function(e) {
     return false;
    });
  };


}


})();