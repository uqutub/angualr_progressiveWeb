angular.module("StarterApp")

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./components/home/home.html",
      controller: "HomeController",
      controllerAs: "home"
    })
    .state("about", {
      url: "/about",
      templateUrl: "./components/about/about.html",
      controller: "AboutController",
      controllerAs: "about"
    })
    .state("contract", {
      url: "/contractUs",
      templateUrl: "./components/contract/contract.html",
      controller: "ContractController",
      controllerAs: "contract"
    })
  $urlRouterProvider.otherwise("/");
})
