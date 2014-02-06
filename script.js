

'use strict';

var app = angular.module('newsItemsApp', ['ngResource']);

    app.controller('MainCtrl', function ($scope, newsAPI, $http) {


        $http.defaults.headers.common = {
            'Accept': "application/json, text/plain, */*",
            'X-Parse-Application-Id': "NC6JVhT34SJ6uiGaG0sJSIt8coEkM30lVNlf9Nv9",
            'X-Parse-REST-API-Key': "sD2TnzHK0f29kssa6SQa6hXFjmFO5BgNeUYjubD3"
        };

    newsAPI.get(function(data){
        $scope.status = status;
        $scope.data = data.results;
    });

    $scope.newPost = function(data){
        var data = {
            title: data.title,
            body: data.body
        }
        newsAPI.post(data, function(){
            $scope.data.push(data);
        });


    };

});

app.factory('newsAPI', ['$resource', function($resource) {
    return $resource('https://api.parse.com/1/classes/NewsItem', null,
        {
            'get': { method:'GET' },
            'post': {method:'POST'}
        });
}]);

//    $.ajaxSetup({
//        url: 'https://api.parse.com/1/classes/NewsItem',
//        beforeSend: function(request) {
//            request.setRequestHeader('X-Parse-Application-Id', 'NC6JVhT34SJ6uiGaG0sJSIt8coEkM30lVNlf9Nv9');
//            request.setRequestHeader('X-Parse-REST-API-Key', 'sD2TnzHK0f29kssa6SQa6hXFjmFO5BgNeUYjubD3');
//        },
//        contentType: 'application/json',
//        dataType:'json'
//
//    });
//

