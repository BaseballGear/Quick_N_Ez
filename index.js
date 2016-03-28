var app = angular.module('myApp', ["firebase"]);
app.controller('formCtrl', function($scope) {
    $scope.login = function()
    {
        var ref = new Firebase("https://quick-n-ez.firebaseio.com/");
        ref.authWithPassword({
            email    : $scope.username,
            password : $scope.password
        }, function(error, authData)
        {
            if (error)
            {
                console.log(error);
            }
            else
            {
                window.location.href = 'home.html';
            }
        });
    };
});
