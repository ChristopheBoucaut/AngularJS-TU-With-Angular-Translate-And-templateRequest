(function (angular) {
    'use strict';
 
    /**
     * Main module of the application.
     */
    var myModule = angular.module('myModule', [
        'pascalprecht.translate'
    ]);
 
    // configure translation service.
    myModule.config([
        '$translateProvider',
        function ($translateProvider) {
            // config loader statics files.
            $translateProvider.useStaticFilesLoader({
                prefix: 'resources/translations/locale-',
                suffix: '.json'
            });
            // determine fallback language.
            $translateProvider.fallbackLanguage('fr');
        }
    ]);
})(window.angular);