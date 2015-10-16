app.controller('MainController', ['$scope', 'donateMsg', function($scope, donateMsg){
    $scope.donateMsg = donateMsg;
    $scope.donating = false;
    $scope.dname  = "";
    $scope.money = "";
    $scope.msg   = "";
    $scope.modal_page = 1;
    $scope.allpayform = "";

    $scope.doDonate = function(){
        $scope.donating = true;
    }
    $scope.cancelDonate = function(){
        $scope.donating = false;
    }

    $scope.submit = function(){
        console.log($scope.dname, $scope.money, $scope.msg);
        
        /*if ($scope.dname != "" && 
            $scope.money != "" &&
            $scope.msg   != ""){
            
            $.ajax({
                type: "POST",
                url: "http://custommaid3d2.net:8888/donate",
                //crossDomain: true,
                data: JSON.stringify({
                    name:  $scope.dname,
                    money: $scope.money,
                    msg:   $scope.msg
                }),
                //contentType: "application/json",
                //dataType: "json",
                success: function(response){
                    $scope.allpayform = response;

                    console.log($scope.allpayform)

                    $scope.dname  = "";
                    $scope.money = "";
                    $scope.msg   = "";
                }
            });
        }*/
        if($scope.dname != "" && $scope.money != ""){
            document.donateForm.submit();
            $scope.cancelDonate();
            $scope.dname = "";
            $scope.money = "";
            $scope.msg   = "";
        }
        
    }


}]);