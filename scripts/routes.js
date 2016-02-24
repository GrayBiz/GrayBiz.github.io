//ROUTES
//Setting up all the specific 'routes' to be followed depending on the link that is pressed

grayApp.config(function ($routeProvider) {

    $routeProvider

    //default "home page". This will contain general information about Gray
        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    
    //contact page. Here the user will be able to contact Gray via email
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })

    //Projects page. Here the user will be able to view summaries of Gray's Projects
    .when('/projects', {
        templateUrl: 'pages/projects.html',
        controller: 'projectsController'
    })

    //if the user inputs an incorrect link, they will automatically be redirected to the home page
    .otherwise({
        redirectTo: '/'
    });
    
    
});