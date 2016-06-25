'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in
app.controller('root', function($scope, session, $state) {
    
     $scope.user = session.get('user');
    $scope.date = new Date();
    
    

    
     $scope.logout = function() {
       session.destroy("user");
       session.destroy("password");
       $state.go("login");       
    }
    
});