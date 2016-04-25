angular.module("app.home", [])

.controller("HomeController", [HomeController]);

function HomeController() {
  var _self = this;
  _self.isLoading = true;

  _self.hidden = function() {
    setTimeout(function() {
      var a = document.getElementById("loader");
      a.setAttribute("hidden", true);
    }, 3000)

    // _self.isLoading = false;
  }
  _self.hidden();
}
