define(['configuration/config',     
        'bijit/homeWidget/controller/homeController',
        
        'bijit/detailsWidget/controller/detailsController',
        'bijit/listWidget/controller/listController'
      ],
    function(config,homeController,listController,detailsController){

    var app = angular.module('newsFeedReader', ['ngRoute']);
    app.config(config);
    app.controller('homeController', homeController);
    app.controller('listController',listController);
    app.controller('detailsController',detailsController);
});