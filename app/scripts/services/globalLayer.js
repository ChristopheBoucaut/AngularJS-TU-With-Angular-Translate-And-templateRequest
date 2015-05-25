(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name myModule.globalLayer
     * 
     * @description Manage the global layer.
     */
    angular.module('myModule').service('globalLayer', [
        '$rootScope',
        '$compile',
        '$templateRequest',
        function ($rootScope, $compile, $templateRequest) {
            this.EVENT_NAME_SET_CONTENT = 'setContentGlobalLayer';

            // Previous scope used for the content.
            var previousScopeContent;

            /**
             * Set an element to the content.
             * 
             * @param {Object} el Element added.
             *
             * @return {Object} Return the scope used for this element.
             */
            this.setContent = function (el) {
                if (previousScopeContent) {
                    previousScopeContent.$destroy();
                }

                previousScopeContent = $rootScope.$new();
                el = $compile(el)(previousScopeContent);

                // a controller listens this event to get the element and sets on the layer.
                $rootScope.$broadcast(this.EVENT_NAME_SET_CONTENT, {el: el});

                return previousScopeContent;
            };

            /**
             * Set a content from a layout template.
             * 
             * @param {string} path Path to layout file.
             *
             * @return {Promise}
             */
            this.setContentFromLayout = function (path) {
                var self = this;
                return $templateRequest(path).then(function (data) {
                    return self.setContent(data);
                });
            };
        }
    ]);
})(window.angular);