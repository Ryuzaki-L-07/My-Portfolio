import { Amiri_Quran } from "next/font/google";

export default function getPersonalData(){
    const personalData = 
        {   
            "personalInfo":{
                    "name":"Shahrier Al Tanzim",
                    "email": "shahrier@iut-dhaka.edu",
                    "emailhref":"mailto:shahrier@iut-dhaka.edu",
            },
            "education":[
                {
                    "name": "Islamic University of Technology, Gazipur",
                    "Degree":"BSc. in Software Engineering",
                    "Duration": "2020 - present",
                },
                {
                    "name": "The Millennium Stars School and College, Rangpur",
                    "Degree":"Higher Secondary Certificate in Science",
                    "Duration": "2018 - 2020",
                },
             ],
            "contact":[
                "Shahrier Al Tanzim",
                "shahrier@iut-dhaka.edu",
                "Department of Computer Science and Engineering",
                "Software Engineering Programme",
                "Islamic University of Technology, Gazipur",
            ],
            "findMeOn":[
                {
                    "imageLink":"./images/SocialMediaIcons/fb.png",
                    "siteLink":`https://www.facebook.com/profile.php?id=100009151512067`,
                    "alt":"facebook ",
                },
                {
                    "imageLink":"./images/SocialMediaIcons/ln.png",
                    "siteLink":`https://www.linkedin.com/in/shahrier-tanzim/`,
                    "alt":"LinkedIn",

                },
                {
                    "imageLink":"./images/SocialMediaIcons/git.png",
                    "siteLink":`https://github.com/ryuzaki-l-07`,
                    "alt":"gitHub",

                },
            ],
            "CVlink":"https://drive.google.com/file/d/1cF2zie6GdFk6incba1LojlNzu07XFH2q/view?usp=drivesdk",
            "Tools": [
                    {
                        "key": "Programming Languages",
                        "values":[
                            {
                            "caption": "C",
                            "imageLink": "./images/Tools/c.png"
                        },
                        {   "caption": "C++",
                            "imageLink": "./images/Tools/cpp.png"
                        },
                        {   "caption": "C#",
                            "imageLink": "./images/Tools/csharp.png"
                        },
                        {   "caption": "Python",
                            "imageLink": "./images/Tools/python.jpg"
                        },
                        {   "caption": "Java",
                            "imageLink": "./images/Tools/java.png"
                        },
                        {   "caption": "JavaScript",
                            "imageLink": "./images/Tools/javaScript.png"
                        },
                        {   "caption": "Html",
                            "imageLink": "./images/Tools/html.png"
                        },
                    ],
                    
                },
                {   
                    "key":"Frame Works",
                    "values":[
                        {   "caption": "NodeJs",
                            "imageLink": "./images/Tools/nodeJs.png",
                        },
                        {   "caption": "Next.js",
                            "imageLink": "./images/Tools/next.png",
                        },
                    ]   
                },
                {
                    "key":"Tools ",
                    "values":[
                        {
                            "caption": "git",
                            "imageLink": "./images/Tools/git.png",
                        },
                        {   "caption": "Jira",
                            "imageLink": "./images/Tools/jira.png",
                        },
                    ]
                },
            ],
            "publication":{},
            "projects":[
                {
                    "title":"IUT TRMS",
                    // "imageLink": "./images/Projects/bloodLink.png",
                    "gitLink":"https://github.com/Ryuzaki-L-07/TrafficRecordManagementSystem",
                    "Demo":"",
                    "Description":"A Traffic management system which Detects the license of car and keeps records of entry-exit where the users can manipulate certain functionalities"
                },
                {
                    "title":"IUT LLIS",
                    "gitLink":"https://github.com/Ryuzaki-L-07/TrafficRecordManagementSystem",
                    "Demo":"",
                    "Description":"A late-leave form system for the residential students. where the users can manipulate certain functionalities"
                },
                {
                    "title":"MOVIE RECOMMENDATION SYSTEM",
                    "gitLink":"https://github.com/Ryuzaki-L-07/MovieRecommendationSystem",
                    "Demo":"",
                    "Description":"A Recommendation system by machine learning where Learning model suggests related movies based on the user's inputs"
                },
                {
                    "title":"RACING IN IUT",
                    "gitLink":"https://github.com/Ryuzaki-L-07/MyDiary",
                    "Demo":"",
                    "Description":"A console based java project implementing necessary Design Patterns which will simulate a race  upon the users preferred inputs"
                },
                {
                    "title":"MYDIARY",
                    "gitLink":"https://github.com/Ryuzaki-L-07/MyDiary",
                    "Demo":"",
                    "Description":"A web based solely backend implemented application where users can login and write their mem-ories in their wall"
                },
            ],
            "workExperience":[
                {
                    "title": "Competitive programming mentor in ",
                    "companyName":"IUTCS",
                    "duration":"August 2024 - December 2024",
                    "Description": ""
                },
                {
                    "title": "Competitive programming mentor in ",
                    "companyName":"TMSSCR Computer Club",
                    "duration":"June 2018 - Jane 2020",
                },
            ],
        }
    

    return personalData;
}



