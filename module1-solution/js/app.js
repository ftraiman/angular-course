(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.style = "";

    $scope.lunchChecker = function () {

      var foodArray = this.lunch.split(",");
      var foodCounter = 0;

      if(this.lunch.length == 0) {
        this.message = "Please enter data first";
        this.style = "red";
        return 0;
      }
      
      for(var i=0; i < foodArray.length; i++){
          var food = foodArray[i].replace(/^\s+/, '').replace(/\s+$/, '');
        if(food === ''){
          $scope.message = "NOT consider and empty item, i.e., , ,";
          this.style = "red";
          return 0;
        } else {
          foodCounter++;
        }
      }

      if(foodCounter <= 3 )
        this.message = "Enjoy!";
      else
        this.message = "Too much!";
        this.style = "green";
    };
  }

})();