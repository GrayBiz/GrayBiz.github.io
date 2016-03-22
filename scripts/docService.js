(function () {
    'use strict';

    angular
        .module('doc')
        .service('docService', ['$q', docService]);

    //    Here I am setting up my entire document's content to simulate asynchronous remote data service calls

    function docService($q){
        var doc = [
            
            {
                section: ' Objective',
                content: 'Seeking a Front End Web Development position at a fast moving and forward thinking company.'
            },
            {
                section: 'Skills',
                subsections: [
                    {
                        title: 'Programming Languages/Frameworks',
                        description: 'HTML, CSS, Bootstrap, JavaScript, AngularJS, Angular Material, ASP.NET MVC, MongoDB, Swift, Objective-C, Visual Studio'
                    },
                    {
                        title: 'Business Skills',
                        description: 'Product Development, Project Management, Software QA, Customer Interaction, Microsoft Office'
                    }
                ]
            },
            {
                section: ' Experience',
                subsections: [
                    {
                        title: 'MyDealerLot',
                        location: 'Atlanta, Georgia',
                        job: 'Front End Web Developer',
                        timeframe: 'June 2015 - Present',
                        description: 'MyDealerLot (MDL) is a software company that utilizes RFID technology to improve the customer experience and aid in inventory management at car dealerships. MDL has over 200+ car dealerships as customers around the country.',
                        projects: [
                            'Lead the design, front end development, and implementation of a mobile first ASP.NET MVC, JavaScript and Bootstrap framework web application; designed to aid in supporting all of MDL’s products and reduce support cost by over $60,000 a year',
                            'Assisted in the creation of a user friendly documentation methodology allowing less technically savvy employees to create and deploy web friendly documentation'
                        ]
                    },
                    {
                        title: 'Tarkenton Companies',
                        location: 'Atlanta, Georgia',
                        job: 'Product Manager',
                        timeframe: 'June 2014 - June 2015',
                        description: 'Tarkenton Companies is the parent company of Tarkenton Financial, a private FMO, and GoSmallBiz, a small business software, support and consulting organization that focuses on helping entrepreneurs with the day to day running of their business.',
                        projects: [
                            'Developed User Experience and Interface for five web applications within the GoSmallBiz platform, utilized by more than 50,000 customers in the United States and Canada',
                            'Lead the development of an online certification program in Entrepreneurship in conjunction with the University of Georgia; features more than 50 hours of video instruction and 120 hours of coursework',
                            'Lead the design, development and deployment of a project to overhaul the GoSmallBiz Web CRM tool’s integration with MailChimp; utilized by more than 30,000 of GSB’s customers',
                            'Assisted with an average of four customer support calls per day; required to diagnose and fix customer software issues with little to no prior information and minimal ability to interface with the customer’s computer'
                        ]
                    },
                    {
                        title: 'Homrich Berg',
                        location: 'Atlanta, Georgia',
                        job: 'IT Support',
                        timeframe: 'July 2013 – September 2013',
                        description: 'Homrich Berg is the largest fee-only financial advisory firm in Georgia.',
                        projects: [
                            'Assisted in the company’s transition to a fully virtual computing environment, involving installing and training employees on 58 workstations running Citrix VDI-in-a-Box',
                            'Deployed, ran and secured Windows software in an enterprise environment',
                            'Managed the company’s IT help desk and responded to an average of 10 or more issues daily, preventing more than $1000 in lost employee productivity each day'
                        ]
                    }
                ]
            },
            {
                section: ' Education',
                subsections: [
                    {
                        title: 'Georgia Institute of Technology, Scheller College of Business',
                        location: 'Atlanta, Georgia',
                        job: 'Bachelor of Science in Business Administration',
                        timeframe: 'May 2014',
                        projects: [
                            'Rikkyo University Study Abroad in Tokyo, Japan',
                            'Georgia Tech VentureLab Startup Gauntlet',
                            'Eagle Scout'
                        ]
                    }
                ]
            },
            {
                section: ' Interests',
                subsections: [
                    {
                        title: 'Volunteer',
                        description: 'Assistant Scout Master of Troop 648, Boy Scouts of America'
                    },
                    {
                        title: 'Hobbies',
                        description: 'Cooking, backpacking, scuba diving, working on cars'
                    }
                ]
            }
        ];
        
        // Promise API
        return {
            loadAllDoc : function() {
                //Simulate Asynchronous call
                return $q.when(doc);
            }
        };
        
    }    

}());