var myCommunityModule = angular.module('myCommunityModule', []);

myCommunityModule.controller('myCommunity', function($scope) {
  $scope.items = [
    { id: 1, img: "http://avatarbox.net/avatars/img24/daffy_duck_head_avatar_picture_16459.gif", name: "Mariya", date: "10/03/2012", message: "Lorem ipsum dolor sit."},
    { id: 2, img: "http://sevnews.info/_____data/photos/1937b61422c637b9df587c6bebd20b53.gif", name: "Anna", date: "10/03/2012", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum animi consequatur provident."}
  ]
});