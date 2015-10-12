app.controller('SubmitController', ['$scope', '$http', 'transformRequestAsFormPost',function($scope, $http, transformRequestAsFormPost){
    $scope.dname  = "";
    $scope.money = "";
    $scope.msg   = "";

    $scope.submit = function(){
        console.log($scope.dname, $scope.money, $scope.msg);
        /*var request = $http({
            method: "post",
            url: 'http://custommaid3d2.net:8888/',
            transformRequest: transformRequestAsFormPost,
            data: JSON.stringify({
                name:  $scope.name,
                money: $scope.money,
                msg:   $scope.msg
            })
        });*/
        /*
        request = $http.post("http://custommaid3d2.net:8888/", {
            name : $scope.name,
            money: $scope.money,
            msg  : $scope.msg
        });*/
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
                $scope.dname  = "";
                $scope.money = "";
                $scope.msg   = "";
            }
        });
        /*
        request.success(function(html){
            $scope.name  = "";
            $scope.money = "";
            $scope.msg   = "";    
        });*/
    };
}]);


// I provide a request-transformation method that is used to prepare the outgoing
// request as a FORM post instead of a JSON packet.
app.factory(
    "transformRequestAsFormPost",
    function() {
        // I prepare the request data for the form post.
        function transformRequest( data, getHeaders ) {
            var headers = getHeaders();
            headers[ "Content-type" ] = "application/x-www-form-urlencoded; charset=utf-8";
            return( serializeData( data ) );
        }
        // Return the factory value.
        return( transformRequest );
        // ---
        // PRVIATE METHODS.
        // ---
        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
        function serializeData( data ) {
            // If this is not an object, defer to native stringification.
            if ( ! angular.isObject( data ) ) {
                return( ( data == null ) ? "" : data.toString() );
            }
            var buffer = [];
            // Serialize each key in the object.
            for ( var name in data ) {
                if ( ! data.hasOwnProperty( name ) ) {
                    continue;
                }
                var value = data[ name ];
                buffer.push(
                    encodeURIComponent( name ) +
                    "=" +
                    encodeURIComponent( ( value == null ) ? "" : value )
                );
            }
            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                .join( "&" )
                .replace( /%20/g, "+" )
            ;
            return( source );
        }
    }
);