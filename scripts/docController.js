(function () {

    angular
        .module('doc')
        .controller('docController', [
            'docService', '$mdSidenav', '$mdDialog', '$mdMedia', '$mdBottomSheet', '$log', '$q',
            docController
    ]);


    function docController(docService, $mdSidenav, $mdDialog, $mdMedia, $mdBottomSheet, $log) {
        var self = this;

        self.selected = null;
        self.sections = [];
        self.subsections = [];
        self.selectSection = selectItem;
        self.toggleSections = toggleSectionList;
        self.lineBreak = "none";
        self.contact = startContact;


        //Load all document content

        docService
            .loadAllDoc()
            .then(function (doc) {
                self.sections = [].concat(doc);

            });

        //Internal Methods

        //Toggle left section list
        function toggleSectionList() {
            $mdSidenav('left').toggle();
        };


        //Select current section
        function selectItem(section) {
            self.selected = angular.isNumber(section) ? $scope.sections[section] : section;
            self.lineBreak = "block";
            console.log(self.selected);
        };


        //set up contact page
        function startContact() {
            
            $mdBottomSheet.show({
                controllerAs: 'cp',
                templateUrl: './views/contact.html',
                controller: ['$mdBottomSheet', contactController],
                parent : angular.element(document.getElementById('content'))
            });

            //bottom contact sheet controller
            function contactController($mdBottomSheet) {
                this.contactName = "Unknown";
                this.contactPhone = "Blank Phone";
                this.contactEmail = "Blank Email";
                this.contactMessage = "Blank Message";
                this.action = {
                    name: "Email",
                    icon: 'email',
                    icon_url: 'images/icons/envelope.svg'
                };
                this.contactMe = function (action) {
                    //implement contact functions


                    //Close the bottom sheet when function fires
                    $mdBottomSheet.hide(action);
                }
            };
        };

    }

}());