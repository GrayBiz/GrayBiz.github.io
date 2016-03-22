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
        
        
        //Select item and expand
        function selectItem() {};


        //bottom contact sheet controller
        function contactController ($mdBottomSheet){
            this.contactName = "Unknown";
            this.contactPhone = "Blank Phone";
            this.contactEmail = "Blank Email";
            this.contactMessage = "Blank Message";
            this.action = {name: "Email", icon: 'email', icon_url: 'images/icons/envelope.svg'};
            this.contactMe = function(action) {
                //implement contact functions
                
                
                //Close the bottom sheet when function fires
                $mdBottomSheet.hide(action);
            }   
        }
        
    }

}());