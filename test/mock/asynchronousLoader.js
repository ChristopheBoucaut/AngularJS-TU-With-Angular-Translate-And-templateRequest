window.mockTranslateLoader = (function () {
    'use strict';

    return function ($provide, $translateProvider) {
        $provide.factory('customLoader', function ($q) {
            return function () {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            };
        });
     
        $translateProvider.useLoader('customLoader');
    };
})();

window.mockViewsLoader = (function () {
    'use strict';

    return function(respond) {
        respond = respond ? respond : jasmine.any(String);
        inject(function ($httpBackend) {
            var pathView = /^views.*\.html$/;
            $httpBackend.when('GET', pathView).respond(respond);
        });
    };
})();