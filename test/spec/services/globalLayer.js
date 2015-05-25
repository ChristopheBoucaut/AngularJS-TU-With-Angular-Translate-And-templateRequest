(function () {
    'use strict';
 
    describe('Service: globalLayer', function () {
        // load the service's module
        beforeEach(module('myModule', window.mockTranslateLoader));
 
        // instantiate service
        var globalLayer, rootScope;
        beforeEach(inject(function (_globalLayer_, $rootScope) {
            globalLayer = _globalLayer_;
            rootScope = $rootScope;
        }));
 
        it('should give the same element that the element of setContent', function () {
            var el = angular.element('<div>');
            rootScope.$on(globalLayer.EVENT_NAME_SET_CONTENT, function (event, datas) {
                expect(datas.el).toEqual(el);
            });
            globalLayer.setContent(el);
        });
 
        it('should give the same element that the content of file gives at setContentFromLayout', inject(function ($httpBackend, $compile) {
            window.mockViewsLoader('<div></div>');
            rootScope.$on(globalLayer.EVENT_NAME_SET_CONTENT, function (event, datas) {
                var scopeCompile = rootScope.$new();
                var elToTest = $compile(angular.element('<div>'))(scopeCompile);
                expect(datas.el).toEqual(elToTest);
            });
            globalLayer.setContentFromLayout('views/globalLayer/connection.html');
            // to resolve the $templateRequest promise.
            rootScope.$digest();
            $httpBackend.flush();
        }));
    });
})();