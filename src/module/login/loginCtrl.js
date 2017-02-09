/**
 * Created by subramaniam on 10/02/17.
 */

app.controller('loginCtrl', function ($scope) {
  $scope.gLogin = function googleLogin(callBack) {
    var authInstance = gapi.auth2.getAuthInstance();
    if (authInstance.isSignedIn.get()) {
      callBack(authInstance.currentUser.get().getAuthResponse());
    } else {
      authInstance.signIn().then(function (response) {
        callBack(response.getAuthResponse());
      });
    }
  };
  $scope.googleLoginCallback = function googleLoginCallback(loginResponse) {
    console.log(loginResponse);
  }
});