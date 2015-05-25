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
 
        it('should give the same element that the content of file gives at setContentFromLayout', function () {
            rootScope.$on(globalLayer.EVENT_NAME_SET_CONTENT, function (event, datas) {
                // fix after
                expect(datas.el).toEqual('???');
            });
            globalLayer.setContentFromLayout('views/globalLayer/connection.html');
            // to resolve the $templateRequest promise.
            rootScope.$digest();
        });
    });
})();