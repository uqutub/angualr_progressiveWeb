angular.module("StarterApp", [
  "ui.router",
  "app.home",
  "app.about",
  "app.contract"
])

.controller("StarterAppController", [StarterAppController]);

function StarterAppController() {
  var _self = this;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service/serviceWorker.js')
      .then(function() {
        console.log('Service Worker Registered');
      });
  }

}
