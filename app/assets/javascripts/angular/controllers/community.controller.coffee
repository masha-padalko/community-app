app.controller 'myCommunity', ($scope, $firebaseArray) ->
  $scope.items = $firebaseArray(new Firebase("https://torrid-heat-3356.firebaseio.com/persons"))
  $scope.addMessage = ->
    $scope.items.$add
      name: $scope.newItem.newName
      img: $scope.newItem.newAva
      message: $scope.newItem.newMes
    $scope.newItem = {}
