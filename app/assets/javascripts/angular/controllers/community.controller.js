app.controller('myCommunity', function($scope, $firebaseArray) {
  var ref = new Firebase("https://torrid-heat-3356.firebaseio.com/persons");

  $scope.items = $firebaseArray(ref)

  $scope.addMessage = function() {
    $scope.items.$add({ name: $scope.newItem.newName, img: $scope.newItem.newAva, message: $scope.newItem.newMes });
    $scope.newItem = {}
  };
});
