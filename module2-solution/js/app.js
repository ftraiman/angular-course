(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var toBuy = this;

        toBuy.itemsToSell = ShoppingListService.itemsToSell;

        toBuy.buy = function (index) {
            ShoppingListService.buy(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var ab = this;

        ab.itemsBought = ShoppingListService.getItemsBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.itemsToSell = [{ name: "Cookies", quantity: 10 }, { name: "Milk", quantity: 2 }, { name: "Bread", quantity: 5 }, { name: "Butter", quantity: 4 }, { name: "Spagetty", quantity: 8 }];
        service.itemsBought = [];


        service.buy = function (index) {
            var item = service.itemsToSell.slice(index, index + 1);
            service.itemsBought.push(item[0]);
            service.itemsToSell.splice(index, 1);
        }

        service.getItemsBought = function () {
            return service.itemsBought;
        }

        service.getItemsBoughtLenght = function () {
            return service.itemsBought.lenght;
        }
    }

})();