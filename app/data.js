const projectsData = [
  {
    id: 'crypto',
    imageProject: '/projects/cryptoverse.jpg',
    title: ' Cryptoverse',
    description: `Cryptoverse is web app developed using React.Js. On the UI this web app is using Ant Design, also Chart.js for the statistics UI, and for the data is using API from RapidApi, then fetch using Axios package. Cryptoverse is real-time update about cryptocurrencies, from details top 100 crypto coins to the latest news worldwide. Cryptoverse deserved a specific details about every top 100 crypto coins in the world, it shows the value statistics from time to time, description about crypto coins itself and link references. On the news section, Cryptoverse deserved real-time up-to-date news about cryptocurrencies, and also it can be filter to select a spesific crypto coins news, for example, news about Bitcoin.`,

    code: 'https://github.com/ericodwr/cryptoverse',
    demo: 'https://cryptoverse-edr.netlify.app/',
    tech: ['React Js', 'Redux', 'Ant Design'],
  },
  {
    id: 'real-estate',
    imageProject: '/projects/real-estate.jpg',
    title: ' Real-Estate',
    description: `Real-Estate is Web App developed using Next.js. For the UI, this Web App is using Chakra-UI package. For the data is using API from RapidApi, then fetch the data using Redux Toolkit package. Real-Estate just like the name, Is web app that shows many list of rent hotels, Apartments, or a house to buy. For the location is on Dubai, there is a lot of hotels, and apartements to be rented. Real-Estate also can view the spesific hotel/apartment with much details. And this web app has filter features to sorting the user needed, for example, set the min price, set max area, rooms, baths, etc. Real-Estate is a helpful web app to people who travelling on Dubai.`,

    code: 'https://github.com/ericodwr/erc-real-estate',
    demo: 'https://erc-real-estate.vercel.app/',
    tech: ['Nex Js', 'Chakra UI'],
  },
  {
    id: 'crowns',
    imageProject: '/projects/crowns.jpg',
    title: ' Crowns',
    description: `Crowns is a e-commerce web app which developed using React.Js. Using simple sass for the UI. For the back end is using firebase for the storage and user account, context for passing data and the last is using Stripe for payment methods. Crowns is e-commerce app who target a young-people to buy the products. Crowns has a great authentication because the user can log in using google account so the user is not always have to create a new account in this web app.In this web app, user just do 3 things, login, checkout, and pay. And the products is on the way to user's home. Crowns have 5 catalogs, and will be more in the future.`,

    code: 'https://github.com/ericodwr/crowns',
    demo: 'https://crowns-clot.netlify.app/',
    tech: ['React Js', 'Redux', 'firebase', 'sass', 'Typescript'],
  },
  {
    id: 'ucars',
    imageProject: '/projects/ucars.jpg',
    title: ' Ucars',
    description: `Ucars is landing page for Startup Car Marketplace from Singapure, Developed using React.Js and Material UI for the style. Of course its already responsive so users can open using mobile devices and desktop. Details and information about Ucars is right here.`,

    code: 'https://github.com/ericodwr/ucars-landingPage',
    demo: 'https://ucars-landing-page.netlify.app/',
    tech: ['React Js', 'Material UI'],
  },
  {
    id: 'carlist',
    imageProject: '/projects/ucarlist.jpg',
    title: 'Car List',
    description: `Car List is a Web App about databases that contains list of cars.Car List is developed using React.JS, for the style using Material UI and last for the databases using simple json-server and fetch it to Redux State. Car List is admin site only, so the admin could create, update, read, and delete or as we known it CRUD.`,

    code: 'https://github.com/ericodwr/CarList',
    demo: 'https://github.com/ericodwr/CarList',
    tech: ['React Js', 'Redux', 'Material UI', 'json-server'],
  },
  {
    id: 'opentable',
    imageProject: '/projects/opentable.jpg',
    title: 'Open Table',
    description: `Open Table is Web App from Bootcamp using Next.Js 13, about application helping restaurants of all sizes thrive, to easily find by user for an occasion. And for user to find restaurants easily with specific requirements by using filter in this App. Developed by newest Next Js version which is Next Js version 13 with authentication and data fetching using Prisma ORM for fetching from Postgres SQL.`,
    code: 'https://github.com/ericodwr/openTable',
    demo: 'https://open-table-sigma.vercel.app/',
    tech: ['Next Js', 'Typescript', 'Prisma', 'Postgres SQL', 'jsonwebtoken'],
  },
];

export default projectsData;
