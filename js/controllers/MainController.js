app.controller('MainController', ['$scope', function($scope){
    $scope.totalmoney = 514;
    $scope.donaters = [
        {
            index: 1,
            name: "Rice",
            money: 100,
            msg: "123456789012345678901234567890"
        },
        {
            index: 2,
            name: "Wetball",
            money: 87,
            msg: "def"
        },
        {
            index: 3,
            name: "Lightorz",
            money: 78,
            msg: "ghi"
        }
    ]
}]);