import { images, icons } from './assets/assets';

const projects = [{
  id: 0,
  image: images.eduValley,
  name: 'eduValley',
  techs: ['Full-Stack', 'Flutter', 'Laravel'],
  heading: 'Online Learning Platform',
  live: 'https://play.google.com/store/apps/details?id=com.eduValley.flutterValley',
  source: 'https://github.com/rex-9/eduValley-flutter',
}, {
  id: 2,
  image: images.ChibiURL,
  name: 'Chibi URL',
  techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS'],
  heading: 'URL shorten service',
  live: 'https://www.loom.com/share/13be355568724ca6b5d8948f1ad2b7e9',
  source: 'https://github.com/rex-9/ChibiURL',
}, {
  id: 3,
  image: images.WebArena,
  name: 'Web Arena',
  techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS', 'Rspec'],
  heading: 'Mini Search Engine',
  live: 'https://web-arena.onrender.com',
  source: 'https://github.com/rex-9/WebArena',
}, {
  id: 4,
  image: images.CarValley,
  name: 'Car Valley',
  techs: ['Full-Stack', 'React', 'Redux', 'Ruby on Rails'],
  heading: 'Homemade Meals',
  live: '',
  source: 'https://github.com/ChrispaixK/car-valley-front-end',
}, {
  id: 5,
  image: images.AppleUI,
  name: 'AppleTV Home Page',
  techs: ['Frontend', 'JavaScript', 'React'],
  heading: 'My UI skills',
  live: 'https://apple-ui-next.vercel.app/',
  source: 'https://github.com/rex-9/AppleUI',
}, {
  id: 6,
  image: images.RexNoBasket,
  name: 'Rex No Basket',
  techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  heading: 'My State Management Skills',
  live: 'https://rex-no-basket.vercel.app/',
  source: 'https://github.com/rex-9/RexNoBasket',
}, {
  id: 7,
  image: images.YummyValley,
  name: 'Yummy Valley',
  techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  heading: 'Homemade Meals',
  live: 'https://YummyValley.netlify.app',
  source: 'https://github.com/rex-9/YummyValley',
}, {
  id: 8,
  image: images.Xrocket,
  name: 'Xrocket',
  techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  heading: 'Missions from SpaceX api',
  live: 'https://xrocket.netlify.app',
  source: 'https://github.com/rex-9/RocketX',
}, {
//   id: 9,
//   image: images.Mathgic,
//   name: 'Mathgic',
//   techs: ['JavaScript', 'React'],
//   heading: 'Mathgical Calculator',
//   live: 'https://Mathgic.netlify.app',
//   source: 'https://github.com/rex-9/Mathgic',
// }, {
  id: 10,
  image: images.Pokeverse,
  name: 'Pokeverse',
  techs: ['JavaScript', 'Webpack'],
  heading: 'The Pokeverse of Cuteness',
  live: 'https://rex-9.github.io/Pokeverse',
  source: 'https://github.com/rex-9/Pokeverse',
// }, {
//   id: 11,
//   image: images.ToDoList,
//   name: 'To-Do List',
//   techs: ['JavaScript', 'Webpack'],
//   heading: 'List of Determination',
//   live: 'https://rex-9.github.io/ToDoList',
//   source: 'https://github.com/rex-9/ToDoList',
  // }, {
  //   id: 12,
  //   image: images.Leaderboard,
  //   name: 'Leaderboard',
  //   techs: ['JavaScript', 'Webpack'],
  //   heading: 'Board of Talents',
  //   live: 'https://rex-9.github.io/Leaderboard',
  //   source: 'https://github.com/rex-9/Leaderboard',
// }, {
//     id: 13,
//     image: images.Landsbetween,
//     name: 'Landsbetween',
//     techs: ['JavaScript'],
//     heading: 'Call of the Landsbetween',
//     live: 'https://rex-9.github.io/Landsbetween',
//     source: 'https://github.com/rex-9/Landsbetween',
  // }, {
  //   id: 14,
  //   image: images.AwesomeBooks,
  //   name: 'Awesomebooks',
  //   techs: ['JavaScript'],
  //   heading: 'Books of Awesomeness',
  //   live: 'https://rex-9.github.io/AwesomeBooks/',
  //   source: 'https://github.com/rex-9/AwesomeBooks',
  // },
  // , {
  //   id: 15,
  //   image: images.Bookstore,
  //   name: 'Bookstore',
  //   techs: ['JavaScript', 'React', 'Redux'],
  //   heading: 'Store of the Wisdom',
  //   live: 'https://rex9bookstore.netlify.app',
  //   source: 'https://github.com/rex-9/Bookstore',
},
];

const profiles = [{
  platform: 'GitHub',
  username: 'rex-9',
  link: 'https://github.com/rex-9',
  logo: icons.github,
}, {
  platform: 'Linkedin',
  username: 'rex9',
  link: 'https://linkedin.com/in/rex9',
  logo: icons.linkedin,
}, {
  platform: 'Angellist',
  username: 'rex9',
  link: 'https://angel.co/u/rex9',
  logo: icons.angellist,
}, {
  platform: 'Medium',
  username: 'rex9',
  link: 'https://medium.com/@rex9',
  logo: icons.medium,
}, {
  platform: 'Twitter',
  username: 'htetnaing0814',
  link: 'https://twitter.com/htetnaing0814',
  logo: icons.twitter,
}, {
  platform: 'Facebook',
  username: 'htetnaing0814',
  link: 'https://facebook.com/htetnaing0814',
  logo: icons.facebook,
}];

const skills = {
  languages: ['JavaScript', 'Ruby', 'PHP', 'Dart', 'Python'],
  frontend: ['ReactJS', 'ReduxJS', 'Flutter', 'Livewire', 'AlpineJS', 'TailwindCSS'],
  fullstack: ['Ruby on Rails', 'Laravel'],
};

const testimonials = [{
  link: 'https://www.linkedin.com/in/alan-luqman/',
  name: 'Alan Luqman',
  recommendation: "I highly recommend #Htet as a software developer. He is smart and friendly while working and always smile, it's my pleasure to give my recommendation to this gentleman.",
}, {
  link: 'https://www.linkedin.com/in/dorian-urem/',
  name: 'Dorian Urem',
  recommendation: 'Htet is a fast learner and works very hard. He was often one of the quickest to finish assignments since he put in the extra hours when he could. He also has a good sense for figuring out problems which I saw when we were working on DSA together. Htet is very friendly and positive and it was always a joy working with him.',
}, {
  link: 'https://www.linkedin.com/in/virag-kormoczy/',
  name: 'Virag Kormoczy',
  recommendation: "I met Rex through a coffee chat and I learned that he is a very dedicated person when it comes to programming. I gave him a lot of advice about the overall Microverse journey and so far he is accomplishing many things. He listens and takes directions well, and he's a good communicator. I totally recommend him, he is a great person to work with.",
}, {
  link: 'https://www.linkedin.com/in/asim-khan/',
  name: 'Asim Khan',
  recommendation: 'Htet Naing is a very hard working and a brilliant coder. His ability to quickly analyze and solve data structures and algorithms are amazing. He has good knowledge on HTML, JavaScript, React and Redux. I have learned a lot while collaborating with him @ Microverse.',
}];

export {
  projects, profiles, skills, testimonials,
};
