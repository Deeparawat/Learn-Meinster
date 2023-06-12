let mic = document.getElementById("mic");


let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


let intro = ["Hello, I am  Minster", "Hi, I am a Voice-Bot "];
let help = ["How may i assist you. What would you like to learn?"," How can i help you?","What i can do for you?","What Your jeal to learn today?"];
let greetings =["Doing good ! How may i help you?"," Doing good ! how can i assist you?"];
let thank=["You are most welocome","Mention Not" ,"It's my job","come again!!"];
let closing=["Bye! See you soon","come again","I hope you learned something new" , "I hope you find me helpful"];

// WEB DEVELOPMENT
let webdevelopment = [
    "You can refer to these free learning channels on youtube : channels are : <a href='https://www.youtube.com/user/TechGuyWeb'>Traversy Media</a>, <a href='https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ'>FreeCodeCamp</a>, <a href='https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg'>The Net Ninja</a>, <a href='https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q'>Dev Ed</a>, <a href='https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w'>Academind</a>, <a href='https://www.youtube.com/user/KepowOb'>Kevin Powell</a>, <a href='https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA'>Programming with Mosh</a>", "Free docs are : <a href='https://www.freecodecamp.org/'>FreeCodeCamp</a>, <a href='https://www.w3schools.com/'>W3Schools</a>, <a href='https://developer.mozilla.org/en-US/'>MDN Web Docs</a>, <a href='https://developer.mozilla.org/en-US/'>Mozilla Developer Network</a>"
];

let frontend =[
    "Free learning channels on YouTube: <a href='https://www.youtube.com/user/TechGuyWeb'>Traversy Media</a>, <a href='https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ'>FreeCodeCamp</a>, <a href='https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg'>The Net Ninja</a>, <a href='https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q'>Dev Ed</a>, <a href='https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w'>Academind</a>, <a href='https://www.youtube.com/user/KepowOb'>Kevin Powell</a>, <a href='https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA'>Programming with Mosh</a>, <a href='https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ'>DesignCourse</a>, <a href='https://www.youtube.com/channel/UCn1XnDWhsLS5URXTi5wtFTA'>Fireship</a>, <a href='https://www.youtube.com/c/DevTipsForDesigners/'>DevTips for Designers</a>",
    "Free online courses: <a href='https://www.freecodecamp.org/'>FreeCodeCamp</a>, <a href='https://www.codecademy.com/'>Codecademy</a>, <a href='https://www.udemy.com/topic/front-end-web-development/free/'>Udemy</a>, <a href='https://www.coursera.org/courses?query=front%20end%20web%20development&'>Coursera</a>, <a href='https://www.edx.org/learn/front-end-web-development'>edX</a>, <a href='https://www.udacity.com/courses/web-development'>Udacity</a>",
    "Free documentation and resources: <a href='https://developer.mozilla.org/en-US/docs/Web'>MDN Web Docs</a>, <a href='https://www.w3schools.com/'>W3Schools</a>, <a href='https://getbootstrap.com/'>Bootstrap</a>, <a href='https://tailwindcss.com/'>Tailwind CSS</a>, <a href='https://fontawesome.com/'>Font Awesome</a>, <a href='https://materializecss.com/'>Materialize</a>, <a href='https://semantic-ui.com/'>Semantic UI</a>, <a href='https://jquery.com/'>jQuery</a>"
];

let Backend = [
    "You can refer to these free learning channels on youtube : channels are : <a href='https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA'>Programming with Mosh</a>, <a href='https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w'>Academind</a>, <a href='https://www.youtube.com/user/TechGuyWeb'>Traversy Media</a>, <a href='https://www.youtube.com/user/learncodeacademy'>LearnCode.academy</a>, <a href='https://www.youtube.com/c/TheNetNinja'>The Net Ninja</a>, <a href='https://www.youtube.com/user/gotowebinar'>GotoWebinar</a>",
    "Free docs are : <a href='https://nodejs.org/en/docs/'>Node.js Documentation</a>, <a href='https://docs.mongodb.com/'>MongoDB Documentation</a>, <a href='https://expressjs.com/'>Express.js</a>, <a href='https://www.postgresql.org/docs/'>PostgreSQL Documentation</a>, <a href='https://docs.sqlalchemy.org/en/14/'>SQLAlchemy Documentation</a>, <a href='https://www.rabbitmq.com/documentation.html'>RabbitMQ Documentation</a>"
];
  
// APP DEVELOPMENT
let AndroidKotlin = [
    "You can refer to these free learning channels on YouTube for Android Development Using Kotlin: <a href='https://www.youtube.com/c/AndroidDevelopers'>Android Developers</a>, <a href='https://www.youtube.com/c/GoogleDevelopers'>Google Developers</a>, <a href='https://www.youtube.com/c/CodinginFlow'>Coding in Flow</a>, <a href='https://www.youtube.com/c/Philipp Lackner'>Philipp Lackner</a>, <a href='https://www.youtube.com/c/ResoCoder'>Reso Coder</a>",
    "Free docs and tutorials are available at: <a href='https://developer.android.com/'>Android Developer Documentation</a>, <a href='https://kotlinlang.org/docs/home.html'>Kotlin Documentation</a>, <a href='https://www.raywenderlich.com/android'>Ray Wenderlich's Android Tutorials</a>, <a href='https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012'>Udacity's Developing Android Apps with Kotlin course</a>, <a href='https://www.codingwithmitch.com/'>Coding with Mitch blog and tutorials</a>"
];

let AndroidJava  = [
    "You can refer to these free learning channels on YouTube: channels are: <a href='https://www.youtube.com/c/codinginflow'>Coding in Flow</a>, <a href='https://www.youtube.com/c/TechPrimers'>TechPrimers</a>, <a href='https://www.youtube.com/c/Mindorks'>Mindorks</a>, <a href='https://www.youtube.com/c/AndroidDeveloperOfficial'>Android Developers</a>, <a href='https://www.youtube.com/c/AndroidAuthority'>Android Authority</a>, <a href='https://www.youtube.com/c/PhilJay'>PhilJay</a>, <a href='https://www.youtube.com/c/ProgrammingKnowledge'>ProgrammingKnowledge</a>",
    "Free docs are: <a href='https://developer.android.com/docs'>Android Developer Documentation</a>, <a href='https://www.tutorialspoint.com/android/index.htm'>TutorialsPoint</a>, <a href='https://www.javatpoint.com/android-tutorial'>JavaTpoint</a>, <a href='https://www.geeksforgeeks.org/android/'>GeeksforGeeks</a>, <a href='https://www.android-examples.com/'>Android Examples</a>, <a href='https://developer.android.com/training/index.html'>Android Developer Training</a>"
];

let Flutter =[
    "You can refer to these free learning channels on youtube for Flutter Development: <a href='https://www.youtube.com/c/FilledStacks'>FilledStacks</a>, <a href='https://www.youtube.com/c/TheNetNinja'>The Net Ninja</a>, <a href='https://www.youtube.com/c/FlutterExplained'>Flutter Explained</a>, <a href='https://www.youtube.com/c/AngelaYu'>Angela Yu</a>, <a href='https://www.youtube.com/c/ResoCoder'>Reso Coder</a>",
    "Free docs are: <a href='https://flutter.dev/docs'>Flutter documentation</a>, <a href='https://flutter.dev/docs/cookbook'>Flutter cookbook</a>, <a href='https://dart.dev/guides'>Dart documentation</a>, <a href='https://pub.dev/'>Pub.dev</a>"
];

//DATA ANALYST
let Data = [
    "You can refer to these free learning channels on youtube: channels are: <a href='https://www.youtube.com/c/Socratica'>Socratica</a>, <a href='https://www.youtube.com/user/CSSimplified'>CodeBasics</a>, <a href='https://www.youtube.com/c/Coreyms'>Corey Schafer</a>, <a href='https://www.youtube.com/user/dataschool'>Data School</a>, <a href='https://www.youtube.com/c/KenJee1'>Ken Jee</a>, <a href='https://www.youtube.com/c/KeithGalli'>Keith Galli</a>, <a href='https://www.youtube.com/c/LearnDataSci'>LearnDataSci</a>, <a href='https://www.youtube.com/c/LexFridman'>Lex Fridman</a>",
    "Free courses and tutorials are: <a href='https://www.edx.org/course/data-science-essentials'>Data Science Essentials (edX)</a>, <a href='https://www.coursera.org/learn/python-data-analysis'>Python Data Analysis (Coursera)</a>, <a href='https://www.coursera.org/learn/data-analysis-with-python'>Data Analysis with Python (Coursera)</a>, <a href='https://www.datacamp.com/courses/introduction-to-data-science-in-python'>Introduction to Data Science in Python (DataCamp)</a>, <a href='https://www.kaggle.com/learn/data-visualization'>Data Visualization (Kaggle Learn)</a>"
];
 // DATA SCIENTIST
let DataScientist =  [
    "You can refer to these free learning channels on youtube: <a href='https://www.youtube.com/channel/UCs_tLP3AiwYKwdUHpltJPuA'>Sentdex</a>, <a href='https://www.youtube.com/user/joshstarmer'>StatQuest with Josh Starmer</a>, <a href='https://www.youtube.com/user/QuantitativeSociety'>QuantitativeSociety</a>, <a href='https://www.youtube.com/user/edurekaIN'>edureka!</a>, <a href='https://www.youtube.com/user/dataschool'>Data School</a>, <a href='https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg'>3Blue1Brown</a>",
    "Free courses are: <a href='https://www.coursera.org/courses?query=data%20science&'>Coursera</a>, <a href='https://www.edx.org/learn/data-science'>edX</a>, <a href='https://www.kaggle.com/learn/overview'>Kaggle</a>, <a href='https://www.datacamp.com/'>DataCamp</a>, <a href='https://www.analyticsvidhya.com/'>Analytics Vidhya</a>"
];

// Block Chain Development
let BlockChain =  [
    "You can refer to these free learning channels on YouTube: <a href='https://www.youtube.com/channel/UCNcSSleedtfyDuhBvOQzFzQ'>Ivan on Tech</a>, <a href='https://www.youtube.com/channel/UCgo7FCCPuylVk4luP3JAgVw'>CryptoZombies</a>, <a href='https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g'>Simply Explained - Savjee</a>, <a href='https://www.youtube.com/channel/UClnw_dbf4VQuzZGdYxaVXxA'>Blockchain Training Alliance</a>",
    "Free documentation and resources are: <a href='https://bitcoin.org/en/resources'>Bitcoin.org Resources</a>, <a href='https://ethereum.org/en/learn/'>Ethereum.org Learning Center</a>, <a href='https://docs.soliditylang.org/en/v0.8.12/'>Solidity Documentation</a>, <a href='https://hyperledger-fabric.readthedocs.io/en/release-2.2/'>Hyperledger Fabric Documentation</a>"
];

// DIGITAL MARKETING 
let DigitalMarketing =[
    "You can refer to these free learning channels on youtube for Digital Marketting : channels are : <a href='https://www.youtube.com/user/neilvkpatel'>Neil Patel</a>, <a href='https://www.youtube.com/channel/UCGkKA7xEOoBQNpC5TJxPLiw'>Brian Dean</a>, <a href='https://www.youtube.com/channel/UC0fDG3byEcMtbOqPMymDNbw'>Backlinko</a>, <a href='https://www.youtube.com/channel/UCx7DwLxKv04KSU0l5YKEz5w'>HubSpot</a>, <a href='https://www.youtube.com/user/Hootsuite'>Hootsuite</a>, <a href='https://www.youtube.com/channel/UCzrW-dR65XfRrut78aw6A-Q'>Moz</a>",
    "Free docs are : <a href='https://blog.hubspot.com/marketing'>HubSpot Marketing Blog</a>, <a href='https://moz.com/learn/seo'>Moz's Beginner's Guide to SEO</a>, <a href='https://www.wordstream.com/learn'>WordStream's PPC University</a>, <a href='https://neilpatel.com/'>Neil Patel's Blog</a>, <a href='https://backlinko.com/'>Backlinko's Blog</a>"
];

// CLOUD COMPUTING
let CloudComputing =[
    "You can refer to these free cloud computing learning channels on youtube for cloud computing : channels are: <a href='https://www.youtube.com/channel/UCvA_jrK6I5JgBk2CtH2n0Lw'>AWS Online Tech Talks</a>, <a href='https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA'>Google Cloud Platform</a>, <a href='https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg'>Microsoft Azure</a>",
    "Free docs are: <a href='https://aws.amazon.com/getting-started/hands-on/'>AWS Getting Started</a>, <a href='https://cloud.google.com/docs'>Google Cloud Docs</a>, <a href='https://docs.microsoft.com/en-us/azure/'>Microsoft Azure Docs</a>, <a href='https://cloudacademy.com/'>Cloud Academy</a>"
];


//MACHINE LEARNING
let MachineLearning =[
    "You can refer to these free learning channels on YouTube for Machine Learning: <a href='https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A'>3Blue1Brown</a>, <a href='https://www.youtube.com/c/sentdex/'>sentdex</a>, <a href='https://www.youtube.com/user/sentdex/playlists?view=50&sort=dd&shelf_id=16'>Machine Learning with Python</a>, <a href='https://www.youtube.com/c/StatQuest/featured'>StatQuest with Josh Starmer</a>, <a href='https://www.youtube.com/user/shiffman/playlists?view=50&sort=dd&shelf_id=19'>The Coding Train</a>",
    "Free courses and tutorials: <a href='https://www.coursera.org/learn/machine-learning'>Machine Learning by Andrew Ng</a>, <a href='https://www.edx.org/course/machine-learning-with-python-a-practical-introduct'>Machine Learning with Python: A Practical Introduction</a>, <a href='https://developers.google.com/machine-learning/crash-course'>Google's Machine Learning Crash Course</a>",
    "Free libraries and tools: <a href='https://www.tensorflow.org/'>TensorFlow</a>, <a href='https://pytorch.org/'>PyTorch</a>, <a href='https://scikit-learn.org/stable/'>scikit-learn</a>, <a href='https://numpy.org/'>NumPy</a>"
];

//BIG DATA 
let BigData =[
    "You can refer to these free learning channels on youtube: channels are: <a href='https://www.youtube.com/user/edurekaIN'>edureka!</a>, <a href='https://www.youtube.com/channel/UC2U5M6KKkV6DjyKuW5d5_xw'>Hadoop Tutorial for Beginners</a>, <a href='https://www.youtube.com/channel/UCFtuWwazK7V5fNOIByWyV7w'>Intellipaat</a>, <a href='https://www.youtube.com/channel/UC8g9-a0aLDdjQTudv00YR2Q'>Simplilearn</a>",
    "Free docs are: <a href='https://hadoop.apache.org/docs/stable/'>Apache Hadoop Documentation</a>, <a href='https://spark.apache.org/docs/latest/'>Apache Spark Documentation</a>, <a href='https://www.mongodb.com/what-is-mongodb'>MongoDB</a>, <a href='https://aws.amazon.com/big-data/what-is-big-data/'>Amazon Web Services - What is Big Data?</a>"
];


//Data Structure 

let DataStructureCpp= [
    "You can refer to these free learning channels on youtube : channels are : <a href='https://www.youtube.com/channel/UC0uTPqBCFIpZxlz_Lv1tk_g'>mycodeschool</a>, <a href='https://www.youtube.com/channel/UC5WO7o71wvxMxEtLRkPhiQQ'>Abdul Bari</a>, <a href='https://www.youtube.com/user/tusharroy2525'>Tushar Roy - Coding Made Simple</a>, <a href='https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA'>William Fiset</a>, <a href='https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA' >CodeHelp by Love Babbar</a> , <a href='https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA'>TakeUForward by Striver</a>"

    ,"Free docs are : <a href='https://www.geeksforgeeks.org/'>GeeksforGeeks</a>, <a href='https://www.tutorialspoint.com/data_structures_algorithms/index.htm'>Tutorialspoint</a>, <a href='https://www.programiz.com/dsa'>Programiz</a>, <a href='https://www.cplusplus.com/'>C++ reference</a>"
    
];

let DataStructureJava= [
    "You can refer to these free learning resources for data structures in Java: <a href='https://www.geeksforgeeks.org/data-structures/'>GeeksforGeeks - Data Structures</a>, <a href='https://www.youtube.com/playlist?list=PLlxQJeQRaKDRd0nTwYcbhlVPOm70d9Kg-' target='_blank' rel='noopener noreferrer'>Programming with Mosh - Data Structures & Algorithms</a>, <a href='https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/' target='_blank' rel='noopener noreferrer'>Udemy - Data Structures and Algorithms Deep Dive Using Java</a>, <a href='https://algs4.cs.princeton.edu/home/' target='_blank' rel='noopener noreferrer'>Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne</a>"
];

let DataStructurePython=["Please wait fethching the data"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition() //SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}




function chatbotvoice(message){                                            
    const speech = new SpeechSynthesisUtterance();
        speech.volume=1;
        speech.rate=1;
        speech.pitch=1;
        speech.text="I'm sorry, I didn't understand that. Say it Again !!";

    if(message.includes('who are you ')|| message.includes('Introduce your self') ||message.includes('hello')||message.includes('hi')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('help') || message.includes( 'Need help')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you') ||message.includes( 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    //Webdevelopment
   if(message.includes('Suggest Some web Development resources') || message.includes('web development') || message.includes('website building') ||message.includes('web') ){
   let finalresult = webdevelopment[Math.floor(Math.random() * webdevelopment.length)];
   speech.text = finalresult;
     }
    //FrontEnd
    if(message.includes('Suggest me Some resources for FrontEnd  Development')||message.includes('website design') || message.includes(' FrontEnd Website Building')|| message.includes('Front')){
        let finalresult = frontend[Math.floor(Math.random() * frontend.length)];
        speech.text = finalresult;
    }
    //Backend
    if(message.includes('Suggest me Some resources for BackEnd  Development')||message.includes(' BackEnd Development') ||message.includes(' BackEnd Website Building')|| message.includes('Back')){
        let finalresult = Backend[Math.floor(Math.random() * Backend.length)];
        speech.text = finalresult;
    }
    //AndroidKotlin
    if(message.includes('Suggest me Some resources for Android Development using koltin' )||message.includes(' android development using koltin ' )||message.includes('kotlin')){
        let finalresult = AndroidKotlin[Math.floor(Math.random() * AndroidKotlin.length)];
        speech.text = finalresult;
    }
    //AndroidJava
    if(message.includes('Suggest me Some resources for Android Development using Java') ||message.includes(' android development using java ') ||message.includes('android')){
        let finalresult = AndroidJava[Math.floor(Math.random() * AndroidJava.length)];
        speech.text = finalresult;
    }
    //Flutter
    if(message.includes('Suggest me Some resources for Flutter Development')||message.includes(' Flutter  Development Resources ' )||message.includes('Flutter') || message.includes('Dart')){
        let finalresult = Flutter[Math.floor(Math.random() * Flutter.length)];
        speech.text = finalresult;
    }
    //DATA ANALYSIS
    if(message.includes('Suggest me Some resources for Data Analysis' )||message.includes(' Data Analysis Resources ') ||message.includes('Data Analysis')||message.includes('Analysis')){
        let finalresult = Data[Math.floor(Math.random() * Data.length)];
        speech.text = finalresult;
    }
    // DATA SCIENTIST
    if(message.includes('Suggest me Some resources for Data Scientist' )||message.includes(' Data Science Resources ') ||message.includes('Data Science')){
        let finalresult = DataScientist[Math.floor(Math.random() * DataScientist.length)];
        speech.text = finalresult;
    }

    //BLOCK CHAIN DEVELOPMENT
    
    if(message.includes('Suggest me Some resources for BLockChain Development')||message.includes(' blockchain development resources ' )||message.includes('blockchain development')){
        let finalresult = BlockChain[Math.floor(Math.random() * BlockChain.length)];
        speech.text = finalresult;
    }
    // DIGITAL MARKETTING 
     if(message.includes('Suggest me Some resources for Digital Marketting' )||message.includes(' digital marketing resources ' )||message.includes('digital marketing')|| message.includes('marketing')){
        let finalresult = DigitalMarketing[Math.floor(Math.random() * DigitalMarketing.length)];
        speech.text = finalresult;
    }
    

    // CLOUD COMPUTING
    if(message.includes('suggest me some resources for cloud computing' )||message.includes(' cloud computing resources ') ||message.includes('cloud computing')){
        let finalresult = CloudComputing[Math.floor(Math.random() * CloudComputing.length)];
        speech.text = finalresult;
    }

    // MACHINE LEARNING
    if(message.includes('suggest me Some resources for Machine Learning' )||message.includes(' machine learning resources ') ||message.includes('machine learning')){
        let finalresult = MachineLearning[Math.floor(Math.random() * MachineLearning.length)];
        speech.text = finalresult;
    }
    
    //BIG DATA
    if(message.includes('Suggest me Some resources for Big Data' ) ||message.includes (' big data Resources ') ||message.includes('big data')){
        let finalresult = BigData[Math.floor(Math.random() * BigData.length)];
        speech.text = finalresult;
    }

    //DATA STRUCTURE C++
    if(message.includes('suggest some resources for learning data structures using C plus plus') || message.includes('Data structure using C++ ') ||message.includes('Data structure using cpp') || message.includes('cpp')){
        let finalresult = DataStructureCpp[Math.floor(Math.random() * DataStructureCpp.length)];
        speech.text = finalresult;
    }



    //DATA STRUCTRURE JAVA
    if(message.includes('Suggest me Some resources for learning Data Structure using Java' )||message.includes(' Data Structure using Java Resources ') ||message.includes('Data Structure using Java')|| message.includes('java')){
        let finalresult = DataStructureJava[Math.floor(Math.random() * DataStructureJava.length)];
        speech.text = finalresult;
    }


    // DATA STRUCTURE PYTHON
    if(message.includes('Suggest me Some resources for learning Data Structure using Python') ||message.includes(' Data Structure using Python Resources ') ||message.includes('data structure using python')||message.includes('python')){
        let finalresult = DataStructurePython[Math.floor(Math.random() * DataStructurePython.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you') || message.includes('thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' ) || message.includes ('talk') || message.includes('bye') ||message.includes('thank you')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    transcript=transcript.toLowerCase();
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    // recognition.interimResults = true;
    recognition.continuous = false;
   console.log("Activated");
});




