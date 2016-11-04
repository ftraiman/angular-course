(function () {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingSellController', ShoppingSellController)
        .controller('ShoppingBoughtController', ShoppingBoughtController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingSellController.$inject = ['ShoppingListService'];
    function ShoppingSellController(ShoppingListService) {
        var sell = this;

        sell.itemsToSell = ShoppingListService.itemsToSell;
        sell.indexClicked;

        sell.buy = function (index) {
            console.log(index);
            sell.indexClicked = index;
            ShoppingListService.buy(index);
        }
    }


    ShoppingBoughtController.$inject = ['ShoppingListService'];
    function ShoppingBoughtController(ShoppingListService) {
        var itemSeller = this;
        var showList = this;

        showList.items = ShoppingListService.getItems();

        showList.removeItem = function (itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        };
    }


    function ShoppingListService() {
        var service = this;

        service.itemsToSell =  [{ name: "Cookies", quantity: 10}, { name: "Milk", quantity: 2}, { name: "Bread", quantity: 5}, { name: "Butter", quantity: 4}, { name: "Spagetty", quantity: 8} ];
        service.itemBought = [];
        
        service.buy = function (index) {
        
        var item = service.itemsToSell.slice(index,index + 1 );
        
        service.itemBought.push(item);
        service.itemsToSell.splice(index, 1);
        console.log(service.itemBought);
        }

        // List of shopping items
        var items = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.removeItem = function (itemIdex) {
            items.splice(itemIdex, 1);
        };

        service.getItems = function () {
            return items;
        };
    }

})();
