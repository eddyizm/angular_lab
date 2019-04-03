app.controller("menuController", [
  '$scope',
  function($scope){
    $scope.model = { title: 'Our Menu'};
    
    $scope.model.mainDish = {
      item: '', 
      price: ''
    };
   
    $scope.changeMainDish = function (item, price){
      
      $scope.model.mainDish.item = item;
      // console.log(item)
      $scope.model.mainDish.price = price;
      //console.log(price)
      // console.log($scope.model.mainDish.item)
      // console.log($scope.mainDish.price)
    }
   
    $scope.$watch('model.mainDish', function (newValue, oldValue){
      if (newValue === 'BBQ Chicken Pizza'){
        alert('You have selected the BBQ Chicken Pizza Bitch!');
      }
    });

  }
]);