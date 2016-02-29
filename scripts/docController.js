(function () {

    angular
        .module('doc')
        .controller('docController', [
            'docService', '$mdDialog', '$mdMedia', '$mdBottomSheet', '$log', '$q',
            docController
    ]);


    function docController(docService, $mdDialog, $mdMedia, $mdBottomSheet, $log) {
        var self = this;

        self.selected = null;
        self.sections = [];
        self.selectSection = selectSection;

        //Load all document content

        docService
            .loadAllDoc()
            .then(function (doc) {
                self.sections = [].concat(doc);
            });

        //Internal Methods

        //Select item and expand
        function selectItem() {};


    }

}());