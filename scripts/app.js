app = angular.module('myApp', ['angularSoap']);

app.factory("openAirService", ['$soap', function($soap) {
  var urls = { wsdl_url: "https://sandbox.openair.com/wsdl.pl", api_url: "https://sandbox.openair.com/soap" };
  return {
    login: function (user, password, company, api_namespace, api_key) {
      return $soap.post(urls, "login", {user: user, password: password, company:company, api_namespace: api_namespace, api_key: api_key});
    }
  }}]);

app.controller('MainCtrl', function($scope, openAirService) {
  $scope.user = 'AppDevService';
  $scope.password = 'DTLKAppDev2015!';
  $scope.company = 'datalink sandbox';
  $scope.api_namespace = 'default';
  $scope.api_key = 'HipTpbn4wovegE0CTbmG';
  $scope.response = 'Hello World';

  $scope.response = openAirService.login($scope.user, $scope.password, $scope.company, $scope.api_namespace, $scope.api_key).then(function(response){
    $scope.response = response;
  });
});
