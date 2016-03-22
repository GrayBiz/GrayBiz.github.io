(function () {

    angular
        .module('doc')
        .controller('docController', [
            'docService', '$scope', '$mdSidenav', '$mdDialog', '$mdMedia', '$mdBottomSheet', '$log', '$q',
            docController
    ]);


    function docController(docService, $scope, $mdSidenav, $mdDialog, $mdMedia, $mdBottomSheet, $log) {
        var self = this;

        self.selected = null;
        self.sections = [];
        self.subsections = [];
        self.selectSection = selectItem;
        self.toggleSections = toggleSectionList;
        self.lineBreak = "none";
        self.hidden = "block";
        self.contact = startContact;


        //Load all document content

        docService
            .loadAllDoc()
            .then(function (doc) {
                self.sections = [].concat(doc);
                self.selected = doc[0];

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
            self.hidden = "none";
            console.log(self.selected);
        };


        //set up contact page
        function startContact() {
            
            var that = this;
            
            $mdBottomSheet.show({
                controllerAs: 'cp',
                templateUrl: './views/contact.html',
                controller: ['$mdBottomSheet', contactController],
                parent : angular.element(document.getElementById('content'))
            });

            //bottom contact sheet controller
            function contactController($mdBottomSheet) {
                
                
                this.firstName = "";
                this.lastName = "";
                this.contactPhone = "";
                this.contactEmail = "";
                this.contactMessage = "";
                this.contactCompany = "";
                this.user = {};
                this.action = {
                    name: "Email",
                    icon: 'email',
                    icon_url: 'images/icons/envelope.svg'
                };
                this.contactMe = function () {
                    //implement contact functions
                   
                    var mailto = "mailto:graybiz@karegeannes.com";
                    var completeMessage = this.contactMessage + "%0D%0A%0D%0A" + this.firstName + "%20" + this.lastName + "%0D%0A" + this.contactCompany + "%0D%0A" + this.contactEmail + "%0D%0A" + this.contactPhone + "%0D%0A";
                    
                    mailto += "?bcc=" + this.contactEmail + "&subject=[Inquiry] Let's get in touch!&body=" + completeMessage;
                    
                    console.log("send button firing!")
                    console.log(this.firstName + " " + this.lastName);

                    window.location.href = mailto;
                    
                    
                    //Close the bottom sheet when function fires
                    $mdBottomSheet.hide();
                }
            };
        };

    }

}());