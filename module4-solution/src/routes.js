(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category list
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-restaurant.template.html',
    controller: 'MainRestaurantListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        //return MenuDataService.getItems();
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('mainList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail"
  });

}

})();
