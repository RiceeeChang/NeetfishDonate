app.controller('MainController', ['$scope', 'donateMsg', function($scope, donateMsg){
    $scope.donateMsg = donateMsg;
    
    $scope.donatable = true;
    $scope.donating = false;
    
    $scope.dname  = "";
    $scope.money = "";
    $scope.msg   = "";
    
    $scope.modal_page = 1;
    $scope.allpayform = "";

    $scope.errorMsg = "";
    $scope.alerting = false;

    $scope.donate = function(){
        if(donateMsg.totalmoney == 0){
            $scope.donatable = false;
        }else{
            $('#myModal').modal('toggle');
        }
    }

    $scope.doDonate = function(){
        $scope.donating = true;
    }
    $scope.cancelDonate = function(){
        $scope.donating = false;
        $scope.alerting = false;
        $scope.dname = "";
        $scope.money = "";
        $scope.msg   = "";
    }

    $scope.submit = function(){
        //console.log($scope.dname, $scope.money, $scope.msg);
        
        if($scope.dname != "" && Number.isInteger($scope.money) && $scope.money >=30){
            document.donateForm.submit();
            $scope.cancelDonate();
            $('#myModal').modal('toggle');
        }else{
            if($scope.dname == "")
                $scope.errorMsg = "你是沒名字喔?";
            else if($scope.money == "")
                $scope.errorMsg = "阿 錢哩錢哩?";
            else if($scope.money < 30)
                $scope.errorMsg = "好小氣唷 不能少於30元";
            $scope.alerting = true;
        }
    }
}]);