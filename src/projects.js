const projects = [
  {
    projectName: "MyFlix Movie App",
    smallDescription:
      "React CRUD app which allows users to signup, login, browse movies and save some to a favorites list.",
    img: "/images/myflix-preview.png",
    pathLink: "/myflix",
    challenges:
      "There were a lot of challenging moments when creating this app due to it being the first full project done with the MERN stack. Learning and building the database with Mongo was pretty hard to do and took some time to complete. Once it was done I created a backend API with express to make requests to the database. This was also a first for me and in doing so it was hard to get the API to work with all requests, and introduce authentication measures such as CORS and Passport. Getting the authentication measures to work and understanding how they work was a huge challenge. There were some front end challenges as well but most of the main challenges came from inexperience with back end technologies and how they function.",
    knowledgeLearned:
      "I learned a lot about Databases and Backend development.I learned about how to build a Node backend and host it.I learned about authentication and authorization on the server side and how to use libraries to help with that such as passport and CORS.I learned how to have both a hosted backend database and a hosted front end that makes requests to that backend.As my first MERN hosted app I learned and did a lot, and know that to get better I will need to have more practice using all these technologies.",
    technologiesUsed: [
      "Mongo",
      "Express",
      "React",
      "Node",
      "Mongoose",
      "React Router",
      "JWT tokens",
      "Material UI",
      "Axios",
    ],
    appLink: "https://github.com/aidenmayoros/myFlix-client",
    year: "2023",
  },
  {
    projectName: "MyFlix Angular Client",
    smallDescription:
      "Angular CRUD app which allows users to signup, login, browse movies and save some to a favorites list",
    img: "/images/myFlix-angular-client-preview.png",
    pathLink: "/myflix_angular_client",
    challenges:
      "This project was one of the hardest challenges I have faced in a long time. I first learned React and thought that Angular would be similar and I might be able to learn it with ease due to that but I was very wrong. Angular just felt so different and difficult to me. I understand its a framework and so it has similar features to React like Components and keeping sections of your app on their own and then rendering them together. To get this project working and learn the basics of Angular I had to invest a lot more time in reading the docs and learning from others on youtube explaining things in different ways. By the end of the project I started to understand it better but to get it more fully I would need to invest a lot more time into it I feel.",
    knowledgeLearned:
      "Learned the basics of Angular applications like; using Modules to organize the application, using Components as the building blocks of the app; using Directives to allow manipulation of the DOM and using dependency injection making it easy to manage and provide dependencies to the components.",
    technologiesUsed: [
      "Angular",
      "Angular Material UI",
      "Mongo",
      "TypeDoc",
      "Jsdoc",
      "Express",
      "Node",
      "Mongoose",
      "JWT tokens",
    ],
    appLink: "https://aidenmayoros.github.io/myFlix-Angular-client/",
    year: "2023",
  },
  {
    projectName: "StrongMind Pizza",
    smallDescription:
      "FullStack CRUD app built to showcase knowledge in modern languages and frameworks for StrongMind",
    img: "/images/strongMind-preview.png",
    pathLink: "/strongMind",
    challenges:
      "This project had a lot of challenges. There was a tight deadline and I had to keep the quality high. It was my first full-stack app after Boot Camp, and I made some mistakes. Time was the biggest challenge because this was for an interview, so I focused and coded as much as I could for five days. Styling and functionality were tough for some features, but I managed to get them working well. Another challenge was building the backend and database after the frontend. I built the frontend first without thinking about the backend, so I had to rework a lot of it after the backend was done.",
    knowledgeLearned:
      "I learned when making the front end I need to know how the backend will be serving the data so I won't have to refactor the frontend when connected to the backend. I also learned a lot about javascript functionality, React state, databases, deployment, testing and documentation.",
    technologiesUsed: [
      "React",
      "Material UI",
      "Axios",
      "Node",
      "Mongoose",
      "Express",
      "Chat GPT",
    ],
    appLink: "https://github.com/aidenmayoros/strongmind_challenge",
    year: "2024",
  },
  {
    projectName: "Chat App",
    smallDescription:
      "Simple chat app to learn and use React Native for native development.",
    img: "/images/Chat-app-preview.png",
    pathLink: "/chat_app",
    challenges:
      "This being my first native app, this was a challenge learning how they are different from web apps. Using React Native did make it easier as I already know React but still it was different due to having different native methods and functionality. Project used Google's Firebase as well for storage which was a little difficult to implement and learn. Overall learning Google's Firebase was probably the hardest part of this project.",
    knowledgeLearned:
      "I learned through creating this project what is involved at a high level in creating native apps. I did really enjoy doing it and think that native development is really fascinating and interesting. I learned that you can write native apps with native specific languages like Swift and Java or in languages that transpile over to code that will work on both IOS and Android devices like React Native.",
    technologiesUsed: [
      "React Native",
      "Expo",
      "Google Firestore DB",
      "Google Firebase Authentication",
      "Firebase Cloud Storage",
      "AsyncStorage caching",
      "Expo ImagePicker",
    ],
    appLink: "https://github.com/aidenmayoros/Chat-App",
    year: "2023",
  },
  {
    projectName: "Pokedex",
    smallDescription: "Pokemon app to view and search for Pokemon data",
    img: "/images/pokedex-preview.png",
    pathLink: "/pokedex",
    challenges:
      "My challenge with this app was learning how to create from scratch a functional but custom modal. The goal was to create a modal from vanilla Javascript but I wanted to be more creative and create a modal that looks like a pokedex. I was able to create and get the modal working pretty easily but then making it work with the custom css for the pokedex look was the harder task. I would say the result was worth the challenge to make it work. ",
    knowledgeLearned:
      "I learned through this project how to better work with DOM manipulation and vanilla Javascript. It taught me how Javascript works to manipulate web pages in a way that we take for granted. Knowing how Javascript is able to create and fill HTML elements in the DOM is crucial to understanding how front end libraries and frameworks use this logic to create components for ease of use. ",
    technologiesUsed: ["Javascript", "HTML", "CSS", "jquery", "IIFE", "API"],
    appLink: "https://aidenmayoros.github.io/Pok-dex/",
    year: "2023",
  },
  {
    projectName: "Meet App",
    smallDescription:
      "App to search and find local events and built to learn TDD.",
    img: "/images/Meet-app-preview.png",
    pathLink: "/meet_app",
    challenges:
      "My biggest challenge with creating this project was learning how to use Test Driven Development and learning how to code tests. Learning how to code tests before writing any project code was very different for me and hard to grasp my head around at first. Knowing how you want your application to work before writing code I now see is very important. I also had a challenge with learning serverless functions with AWS Lambda. Having AWS perform as my server is very convenient and nice to use once set up. There is a learning curve for serverless functions or cloud computing but I hope to get better at it moving forward.",
    knowledgeLearned:
      "I learned through creating this project what is involved in writing tests for applications using a Test Driven Development technique or TDD. This involved learning how to write and use Reacts testing library to be able to write and use tests for React. I have learned the importance of writing and having tests for your applications and having the different types of tests involved (Unit, Integration and End to End tests). Next was learning how to use AWS Lambda functions to have a serverless backend. Through this method I was able to have AWS be my apps backend and make the server easy to use. I know I have a lot to learn about AWS or serverless technologies but this was a great start at becoming introduced into it. Next was learning Object Oriented Programming techniques. I learned how React used to be written with Class components and how that's different from how we use functional components and how functional components better fit into how Javascript operates. To finish it off I learned about Progressive Web Apps and how they compare and differ from regular web apps and native apps. I then learned how to implement progressive functionality into my built app so it could be used offline. ",
    technologiesUsed: [
      "React",
      "Async Await",
      "AWS Lambda",
      "React Testing Library",
      "Google API",
      "OAuth2 authentication",
    ],
    appLink: "https://aidenmayoros.github.io/meet/",
    year: "2023",
  },
  {
    projectName: "React Expense Tracker",
    img: "/images/expense-tracker-preview.png",
    pathLink: "/expense_tracker",
    challenges:
      "This was a larger project that took me some time to complete. It involved a log in, register and forgot password page with validation. Then inside the app I used an API to generate some fake data every time it loads. It was created and styled with Material UI framework for easier to use components. Putting together all I know of frameworks and React to make this project was difficult but rewarding.",
    knowledgeLearned:
      "Learned to better use frameworks such as Material UI and to read the documentation of how it is set up and works when my componenets are not working as expected. I learned how to put a full APP together with validation, multiple pages and components and how they all fit and work together.",
    technologiesUsed: ["React", "React Router", "Material UI"],
    appLink: "/expense_tracker/app",
    year: "2023",
  },
  {
    projectName: "Weather Forecast API",
    img: "/images/weather-forecast-preview.png",
    pathLink: "/weather_forecast",
    challenges:
      "With this project it was challenging to get the API working since I was fairly new to asynchronous Javascript. I used OpenWeatherMap's free Weather API and had to spend a good amount of time looking through the documentation to figure out specifically how it works. Once I sifted through documentation, I eventually got it working.",
    knowledgeLearned:
      "The main thing I learned from this project is how important documentation is to read & understand. In this project I also learned how to use the built-in javascript map prototype method to create & return an array of components, each representing a weather day of the week.",
    technologiesUsed: ["React", "Bootstrap", "OpenWeatherMap API", ""],
    appLink: "/weather_forecast/app",
    year: "2022",
  },
  {
    projectName: "Simple Calculator",
    img: "/images/calculator-preview.png",
    pathLink: "/calculator",
    challenges:
      "Prior to this project, I had created a basic Mortgage Calculator, but this time I decided to take on the challenge to create something similar with React. A big challenge to this project was learning about React's component lifecycle and how components re-render on state change. I ran into many errors and infinite render loops which eventually led to a better understandin of React component lifecycles. I also learned a lot about passing down props to components and how that entire lifecycle works as well.",
    knowledgeLearned:
      "I learned how to structure components in a project and organize them all in a larger project. Learned how to use state more and passing state down to other components as props. This project helped me a lot put all the pieces of React together into a project and really see the benefits of using React and state over just querying the DOM directly with vanilla Javascript.",
    technologiesUsed: ["React"],
    appLink: "/calculator/app",
    year: "2022",
  },
];

export default projects;
