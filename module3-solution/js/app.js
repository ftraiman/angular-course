(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.found = [];
        ctrl.nothing = false;

        ctrl.search = function () {
            ctrl.found = [];
            ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        }
        ctrl.removeItem = function (itemIndex) {
            ctrl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.filtered = [];
        service.found = [];

        service.getMatchedMenuItems = function (searchTerm) {
            service.found = [];
            var promise = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            });

            promise.then(function (response) {
                var allItems = response.data.menu_items;  
                if(searchTerm == "" | searchTerm == undefined) {
                    for (var index = 0; index < allItems.length; index++) {
                        service.found.push(allItems[index]);
                    }

                } else {
                    for (var index = 0; index < allItems.length; index++) {
                        if (allItems[index].description.includes(searchTerm)) {
                            service.found.push(allItems[index]);
                        }
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
            
            return service.found;
        }
    }

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItemsTemplate.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    }

})();