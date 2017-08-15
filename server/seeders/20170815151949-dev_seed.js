const users = [{ 
  id: '117572460453417284894',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284895',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284896',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284897',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284898',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284899',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284900',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  id: '117572460453417284901',
  name: 'fake',
  email: 'fake@dev.com',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}];

const techs = [{
  id: 1,
  name: 'Elm',
  type: 'Language',
  description: 'A delightful language for reliable webapps. Boasts about JavaScript interop, no runtime exceptions, great performance and enforced semantic versioning.',
  url: 'http://elm-lang.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 2,
  name: 'React',
  type: 'Web Framework',
  description: 'A JavaScript library for building user interfaces. Boasts about being declarative, component-based and Learn-once, Write anywhere.',
  url: 'https://facebook.github.io/react/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 3,
  name: 'React-Native',
  type: 'Mobile Framework',
  description: 'React Native lets you build mobile apps using only JavaScript.' +
    ' It uses the same design as React, letting you compose a rich mobile UI from declarative components.',
  url: 'https://facebook.github.io/react-native/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 4,
  name: 'Firebase',
  type: 'Mobile App dev Platform',
  description: 'Firebase is Google\'s mobile platform that helps you quickly develop high-quality apps and grow your business.' + 
    ' Boasts about allowing you to build fast, without managing infrastructure, being backed by Google,' +
    ' allowing to have one console with products that work together.',
  url: 'https://firebase.google.com/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 5,
  name: 'Graph QL',
  type: 'API query language',
  description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.' + 
    ' Boasts about GraphQL providing a complete and understandable description of the data in your API,' +
    ' giving clients the power to ask for exactly what they need and nothing more,' +
    ' making it easier to evolve APIs over time, and enabling powerful developer tools.',
  url: 'http://graphql.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 6,
  name: 'Phoenix',
  type: 'Web Framework',
  description: 'A productive web framework that does not compromise speed and maintainability.',
  url: 'http://phoenixframework.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 7,
  name: 'MapBox',
  type: 'Library / Mapping platform',
  description: 'An open source mapping platform for custom designed maps. Our APIs and SDKs are the building blocks to integrate location into any mobile or web app.',
  url: 'https://www.mapbox.com/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 8,
  name: 'Scala js',
  type: 'Language',
  description: 'A safer way to build robust front-end web applications. Boasts about correctness, performance and interoperability.',
  url: 'https://www.scala-js.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 9,
  name: 'Go',
  type: 'Language',
  description: 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
  url: 'https://golang.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 10,
  name: 'Ionic 2',
  type: 'Mobile App dev Platform',
  description: 'The top open source framework for building amazing mobile apps. Boast about being free and open-source, fully cross-platform, having native plugins and first-class documentation.',
  url: '',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 11,
  name: 'Angular',
  type: 'Web & Mobile Framework',
  description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
  url: 'https://angular.io/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 12,
  name: 'Play',
  type: 'Web Framework',
  description: 'The High Velocity Web Framework For Java and Scala. Boasts about being developer friendly, scaling predictably, catering for the needs of modern web & mobile apps.',
  url: '',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 13,
  name: 'Web Assembly',
  type: 'Language',
  description: 'WebAssembly or wasm is a new portable, size- and load-time-efficient format suitable for compilation to the web.' +
    ' It is a low-level bytecode format for in-browser client-side scripting, evolved from JavaScript.' +
    ' Its initial aim is to support compilation from C and C++, though other source languages such as Rust are also supported.',
  url: 'http://webassembly.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 14,
  name: 'A-Frame',
  type: 'Web framework',
  description: 'A web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component.',
  url: 'https://aframe.io/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 15,
  name: 'Protocol Buffer',
  type: 'Serialization mechanism',
  description: 'Protocol buffers are Google\'s language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler.',
  url: 'https://developers.google.com/protocol-buffers/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 16,
  name: 'Falcor',
  type: 'Library',
  description: 'Falcor lets you represent all your remote data sources as a single domain model via a virtual JSON graph.' +
  ' You code the same way no matter where the data is, whether in memory on the client or over the network on the server.',
  url: 'https://netflix.github.io/falcor/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 17,
  name: 'Elixir',
  type: 'Language',
  description: 'Elixir is a dynamic, functional language designed for building scalable and maintainable applications.' +
  ' Elixir leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems,' +
  ' while also being successfully used in web development and the embedded software domain.',
  url: 'https://elixir-lang.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 18,
  name: 'Ant Design',
  type: 'UI design guidelines',
  description: 'An enterprise-class UI design language and React-based implementation.',
  url: 'https://ant.design/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 19,
  name: 'Electron',
  type: 'Cross platform desktop app framework.',
  description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS.',
  url: 'https://electron.atom.io/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 20,
  name: 'Deck GL',
  type: 'Library',
  description: 'A WebGL-powered framework for visual exploratory data analysis of large datasets.',
  url: 'https://uber.github.io/deck.gl/#/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}, {
  id: 21,
  name: 'Vue',
  type: 'Web Framework',
  description: 'The Progressive JavaScript Framework. Boasts about being approachable, versatile and performant.',
  url: 'https://vuejs.org/',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z',
  createdBy: '117572460453417284894'
}];

const links = [{
  technologyId: 1,
  name: 'awesome-elm',
  url: 'https://github.com/isRuslan/awesome-elm',
  type: 'Links',
  description: 'A list of videos, examples, libraries, tools, etc. Probably even better than this list ;-)',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: ' Let\'s be mainstream! User focused design in Elm',
  url: 'https://www.youtube.com/watch?v=oYk8CKH7OhE',
  type: 'Info',
  description: 'A talk from the creator of Elm, where he is specifically wondering how to get to the javascript community with a typed, functional language',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'Make the Back-End Team Jealous: Elm in Production',
  url: 'https://www.youtube.com/watch?v=FV0DXNB94NE',
  type: 'Info',
  description: 'Talk from one of the early-adopters of Elm, where he\'s explaining how the biggest feature of Elm for him is the ease of refactorings',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'Toward a Better Front End Architecture: Elm',
  url: 'https://www.youtube.com/watch?v=EDp6UmaA9CM',
  type: 'Intro',
  description: 'Jan. 2017 introduction video to give you a quick overview of the language',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'Code of elm architecture tutorial',
  url: 'https://github.com/evancz/elm-architecture-tutorial',
  type: 'Source code',
  description: 'The source code of an Elm tutorial on its architecture',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'Elm benchmarking lib',
  url: 'https://www.brianthicks.com/post/2017/02/27/introducing-elm-benchmark/',
  type: 'Info',
  description: 'Introduction to elm benchmarking library',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'Elm tutorial',
  url: 'https://www.elm-tutorial.org',
  type: 'Tutorial',
  description: 'Single Page App in Elm',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'SPA in elm',
  url: 'https://github.com/ohanhi/elm-taco',
  type: 'Source code',
  description: 'Example of a large Single Page App in Elm, with global state',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'Elm in production: surprises and pain points',
  url: 'https://www.youtube.com/watch?v=LZj_1qVURL0',
  type: 'Info',
  description: 'Elm in production: surprises and pain points',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: '6 months in Elm insights from a dev team',
  url: 'https://medium.com/@NewMountain/some-thoughts-on-elm-development-39a0f8a9002a',
  type: 'Info',
  description: '6 months in Elm insights from a dev team',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 1,
  name: 'I was wrong to dismiss Elm and I think you probably are too',
  url: 'https://dev.to/dnimmo/i-was-wrong-to-dismiss-elm-and-i-think-you-probably-aretoo',
  type: 'Info',
  description: '',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 2,
  name: 'Udemy React + Redux course',
  description: 'A nice complete course on React + Redux',
  url: 'https://www.udemy.com/react-redux/',
  type: 'Tutorial',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 2,
  name: 'Foutain scaffolding tool',
  description: 'A Yeoman generator for all your frontend projects',
  url: 'http://fountainjs.io/',
  type: 'Tool',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 2,
  name: 'React + Redux explanation',
  description: 'A tutorial on React + Redux',
  url: 'https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros',
  type: 'Tutorial',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 2,
  name: 'Redux home page',
  description: 'Redux is one of the most used predictable state container with React',
  url: 'http://redux.js.org/',
  type: 'Info',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 2,
  name: 'Material Design for React',
  description: 'A Set of React Components that Implement Google\'s Material Design',
  url: 'http://www.material-ui.com/',
  type: 'Tool',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  technologyId: 2,
  name: 'React Ant Design',
  type: 'Tool',
  description: 'A Set of React Components that Implement Ant Design',
  url: 'https://ant.design/docs/react/introduce',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}];

const votes = [{
  voteTechnologyId: 1,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284895',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284896',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284897',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284898',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284899',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284900',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, { 
  voteTechnologyId: 1,
  voteUserId: '117572460453417284901',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 2,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 2,
  voteUserId: '117572460453417284895',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 2,
  voteUserId: '117572460453417284896',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 2,
  voteUserId: '117572460453417284897',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 2,
  voteUserId: '117572460453417284898',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 3,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 3,
  voteUserId: '117572460453417284895',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 3,
  voteUserId: '117572460453417284896',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 3,
  voteUserId: '117572460453417284897',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 3,
  voteUserId: '117572460453417284898',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 4,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 4,
  voteUserId: '117572460453417284895',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 4,
  voteUserId: '117572460453417284896',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 4,
  voteUserId: '117572460453417284897',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 5,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 5,
  voteUserId: '117572460453417284895',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 5,
  voteUserId: '117572460453417284896',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 6,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 6,
  voteUserId: '117572460453417284895',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 7,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 8,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}, {
  voteTechnologyId: 12,
  voteUserId: '117572460453417284894',
  updatedAt: '2017-08-15T16:38:41.621Z',
  createdAt: '2017-08-15T16:38:41.621Z'
}];    

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users)
      .then(() => queryInterface.bulkInsert('Technologies', techs))
      .then(() => queryInterface.bulkInsert('Links', links))
      .then(() => queryInterface.bulkInsert('Votes', votes));
  },
  down: (queryInterface, Sequelize) => {
    // Cascading should delete the rest
    return queryInterface.bulkDelete('Users', users);
  }
};
