require.config({
    baseUrl: ".",
    paths: {
        'app': 'app/app',
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',
        'angular-css': 'bower_components/angular-css/angular-css.min',
        'angular-material': 'bower_components/angular-material/angular-material',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'angular-aria': 'bower_components/angular-aria/angular-aria'
    },
    shim: {
        'angularAMD ': ['angular'],
        'angular-route': ['angular'],
        'angular-material': ['angular'], //, 'angular-animate', 'angular-aria'],
        'angular-animate': ['angular'],
        'angular-aria': ['angular'],
        'angular-css': ['angular']
    },
    deps: ['app']
});