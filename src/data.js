import { images, icons } from './assets/assets';

const projects = [{
  id: 0,
  image: images.eduValley,
  name: 'eduValley',
  techs: ['Full-Stack', 'Flutter', 'Laravel'],
  details: ['Online Learning Platform', 'Unlimited Free Video Call', 'Video and Audio Streaming'],
  live: 'https://play.google.com/store/apps/details?id=com.eduValley.flutterValley',
  source: 'https://github.com/rex-9/eduValley-flutter',
}, {
  id: 2,
  image: images.ChibiURL,
  name: 'Chibi URL',
  techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS'],
  details: ['URL shorten service', 'Custom URL', 'Analytics'],
  live: 'https://chibiurl.onrender.com/',
  source: 'https://github.com/rex-9/ChibiURL',
}, {
  id: 3,
  image: images.WebArena,
  name: 'Web Arena',
  techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS', 'Rspec'],
  details: ['Mini Search Engine', 'Admin Panel', 'Analytics'],
  live: 'https://www.loom.com/share/4bcd220ea5bf47b6a64bdc6f5dea1dc9',
  source: 'https://github.com/rex-9/WebArena',
}, {
  id: 4,
  image: images.CarValley,
  name: 'Car Valley',
  techs: ['Full-Stack', 'React', 'Redux', 'Ruby on Rails'],
  details: ['Car Reservations', 'Add Cars', 'Add Reservations'],
  live: '',
  source: 'https://github.com/ChrispaixK/car-valley-front-end',
  }, {
    // id: 5,
//     image: images.AppleUI,
//     name: 'AppleTV Home Page',
//     techs: ['Frontend', 'JavaScript', 'React'],
//     details: ['AppleTV UI clone', 'Display My UI skills', 'Responsive Design'],
//     live: 'https://apple-ui-next.vercel.app/',
//     source: 'https://github.com/rex-9/AppleUI',
//   }, {
//     id: 6,
//     image: images.RexNoBasket,
//     name: 'Rex No Basket',
//     techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
//     details: ['My Redux Skills', 'Many to Many Associations'],
//     live: 'https://rex-no-basket.vercel.app/',
//     source: 'https://github.com/rex-9/RexNoBasket',
// }, {
  id: 7,
  image: images.YummyValley,
  name: 'Yummy Valley',
  techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  details: ['Homemade Meals', 'Recipes', 'Ingredients'],
  live: 'https://YummyValley.netlify.app',
  source: 'https://github.com/rex-9/YummyValley',
}, {
  id: 8,
  image: images.Xrocket,
  name: 'Xrocket',
  techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  details: ['Missions from SpaceX api', 'Rockets from SpaceX api'],
  live: 'https://xrocket.netlify.app',
  source: 'https://github.com/rex-9/RocketX',
  // }, {
  //   id: 9,
  //   image: images.Mathgic,
  //   name: 'Mathgic',
  //   techs: ['JavaScript', 'React'],
  //   details: 'Mathgical Calculator',
  //   live: 'https://Mathgic.netlify.app',
  //   source: 'https://github.com/rex-9/Mathgic',
}, {
  id: 10,
  image: images.Pokeverse,
  name: 'Pokeverse',
  techs: ['JavaScript', 'Webpack'],
  details: ['The Pokeverse of Cuteness', 'PokeAPI'],
  live: 'https://rex-9.github.io/Pokeverse',
  source: 'https://github.com/rex-9/Pokeverse',
// }, {
  //   id: 11,
  //   image: images.ToDoList,
  //   name: 'To-Do List',
  //   techs: ['JavaScript', 'Webpack'],
  //   details: 'List of Determination',
  //   live: 'https://rex-9.github.io/ToDoList',
  //   source: 'https://github.com/rex-9/ToDoList',
  // }, {
  //   id: 12,
  //   image: images.Leaderboard,
  //   name: 'Leaderboard',
  //   techs: ['JavaScript', 'Webpack'],
  //   details: 'Board of Talents',
  //   live: 'https://rex-9.github.io/Leaderboard',
  //   source: 'https://github.com/rex-9/Leaderboard',
  // }, {
  // id: 13,
  // image: images.Landsbetween,
  // name: 'Landsbetween',
  // techs: ['JavaScript'],
  // details: ['Call of the Landsbetween'],
  // live: 'https://rex-9.github.io/Landsbetween',
  // source: 'https://github.com/rex-9/Landsbetween',
}, {
  id: 14,
  image: images.AwesomeBooks,
  name: 'Awesomebooks',
  techs: ['JavaScript'],
  details: ['Books of Awesomeness', 'Manage Books and Authors'],
  live: 'https://rex-9.github.io/AwesomeBooks/',
  source: 'https://github.com/rex-9/AwesomeBooks',
// }, {
//   id: 15,
//   image: images.Bookstore,
//   name: 'Bookstore',
//   techs: ['JavaScript', 'React', 'Redux'],
//   details: ['Store of the Wisdom'],
//   live: 'https://rex9bookstore.netlify.app',
//   source: 'https://github.com/rex-9/Bookstore',
}];

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
  languages: [
    { name: 'JavaScript', url: 'https://www.javascript.com' },
    { name: 'Ruby', url: 'https://www.ruby-lang.org/en/' },
    { name: 'PHP', url: 'https://www.php.net' },
    { name: 'Dart', url: 'https://dart.dev' },
    { name: 'Python', url: 'https://www.python.org' },
  ],
  frontend: [
    { name: 'ReactJS', url: 'https://reactjs.org' },
    { name: 'ReduxJS', url: 'https://redux.js.org' },
    { name: 'Flutter', url: 'https://www.flutter.dev' },
    { name: 'Livewire', url: 'https://laravel-livewire.com' },
    { name: 'AlpineJS', url: 'https://alpinejs.dev' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com' },
  ],
  fullstack: [
    { name: 'Ruby on Rails', url: 'https://rubyonrails.org' },
    { name: 'Laravel', url: 'https://laravel.com' },
  ],
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
