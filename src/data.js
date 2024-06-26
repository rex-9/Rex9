import { images, icons } from './assets/assets';

const projects = [{
  id: 22,
  image: images.Juice,
  name: 'Juice Serve',
  techs: ['EV', 'Full-Stack', 'Flutter', 'Python', 'GetX', 'Flask', 'Firebase', 'Web'],
  details: ["The most seamless EV charging and parking experiences ever", "Powered by computer vision"],
  live: 'https://www.js.eco/',
  source: null,
}, {
  id: 21,
  image: images.Smthgood,
  name: 'Smthgood',
  techs: ['Frontend', 'Flutter', 'Bloc', 'Firebase', 'Web', 'Android', 'iOS'],
  details: ['Look good, Do good, Feel good', "A new Home for Conscious Fashion", 'Discover your Inner Fashion Angel'],
  live: 'https://www.smthgoodco.com/',
  source: null,
},
{
  id: 20,
  image: images.Bidsloth,
  name: 'Bidsloth',
  techs: ['Backend', 'Nodejs', 'Stripe', 'Cloudinary', 'MongoDB'],
  details: ['Auction anything FAN-tastic', "It's free!", 'Effortless yet Effective Fanservice'],
  live: 'https://bidsloth.com/',
  source: null,
}, {
  id: 19,
  image: images.Aidma,
  name: 'Aidma Holdings',
  techs: ['Frontend', 'VueJS', 'Quasar', 'Responsive', 'CSS'],
  details: ['Japanese LinkedIn', 'Boost your Career', 'Boost your Company'],
  live: 'https://www.aidma-hd.jp/',
  source: null,
}, {
  id: 18,
  image: images.Asirius,
  name: 'Asirius',
  techs: ['Full-Stack', 'Reactjs', 'Laravel', 'MySQL'],
  details: ['Powerful E-commerce', 'Customized Merchant Websites', 'Simple yet All-in-One service'],
  live: 'https://asirius.io/',
  source: null,
}, {
  id: 17,
  image: images.Servd,
  name: 'Servd',
  techs: ['Full-Stack', 'Reactjs', 'Laravel', 'MySQL', 'MongoDB'],
  details: ['Asirius Client', 'Customized Merchant Websites', 'Simple yet All-in-One service'],
  live: 'https://order.servd.me/mm/?storeId=63638ed7cd299fe4b801d402',
  source: null,
}, {
  id: 16,
  image: images.Cloud9,
  name: 'Cloud9',
  techs: ['Mobile', 'Flutter', 'GetX'],
  details: ['Unlock the Power of Loyalty', 'Efficient Mobile Scanner', 'Innovative Agile Development'],
  live: null,
  source: null,
}, {
  id: 15,
  image: images.eduValley,
  name: 'eduValley',
  techs: ['Full-Stack', 'Flutter', 'Laravel', 'MySQL'],
  details: ['Online Learning Platform', 'Unlimited Free Video Call', 'Video and Audio Streaming'],
  // live: 'https://play.google.com/store/apps/details?id=com.eduValley.flutterValley',
  live: null,
  source: 'https://github.com/rex-9/eduValley-flutter',
}, {
  id: 14,
  image: images.ChibiURL,
  name: 'Chibi URL',
  techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS', 'PostgreSQL'],
  details: ['URL shorten service', 'Custom URL', 'Analytics'],
  live: 'https://www.loom.com/share/13be355568724ca6b5d8948f1ad2b7e9?sid=6c54bba4-e595-45f2-b5d1-e491060f9ccb',
  source: 'https://github.com/rex-9/ChibiURL',
  // }, {
  //   id: 13,
  //   image: images.WebArena,
  //   name: 'Web Arena',
  //   techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS', 'Rspec', 'PostgreSQL'],
  //   details: ['Mini Search Engine', 'Admin Panel', 'Analytics'],
  //   live: 'https://www.loom.com/share/4bcd220ea5bf47b6a64bdc6f5dea1dc9',
  //   source: 'https://github.com/rex-9/WebArena',
  // }, {
  //   id: 10,
  //   image: images.CarValley,
  //   name: 'Car Valley',
  //   techs: ['Full-Stack', 'React', 'Redux', 'Ruby on Rails'],
  //   details: ['Car Reservations', 'Add Cars', 'Add Reservations'],
  //   live: '',
  //   source: 'https://github.com/ChrispaixK/car-valley-front-end',
}, {
  id: 12,
  image: images.AppleUI,
  name: 'AppleTV Home Page',
  techs: ['Frontend', 'JavaScript', 'React'],
  details: ['AppleTV UI clone', 'Display My UI skills', 'Responsive Design'],
  live: 'https://codigo-apple-tv.vercel.app/',
  source: 'https://github.com/rex-9/Codigo-Apple',
}, {
  id: 11,
  image: images.RexNoBasket,
  name: 'Rex No Basket',
  techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  details: ['My Redux Skills', 'Many to Many Associations'],
  live: 'https://codigo-team-players.vercel.app/',
  source: 'https://github.com/rex-9/RexNoBasket',
}, {
  id: 10,
  image: images.LegacyFa,
  name: 'Legacy FA Admin UI',
  techs: ['Frontend', 'JavaScript', 'React', 'Apex Charts'],
  details: ['Admin UI', 'Light/Dark Mode', 'Data Charts'],
  live: 'https://drive.google.com/file/d/1SLUdlyzRBvoKv63vYlCwLDKHPUH2_RZb/view',
  source: 'https://github.com/rex-9/legacyfa',
  // }, {
  //   id: 7,
  //   image: images.YummyValley,
  //   name: 'Yummy Valley',
  //   techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  //   details: ['Homemade Meals', 'Recipes', 'Ingredients'],
  //   live: 'https://YummyValley.netlify.app',
  //   source: 'https://github.com/rex-9/YummyValley',
  // }, {
  //   id: 6,
  //   image: images.Xrocket,
  //   name: 'Xrocket',
  //   techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
  //   details: ['Missions from SpaceX api', 'Rockets from SpaceX api'],
  //   live: 'https://xrocket.netlify.app',
  //   source: 'https://github.com/rex-9/RocketX',
  // }, {
  //   id: 5,
  //   image: images.Mathgic,
  //   name: 'Mathgic',
  //   techs: ['JavaScript', 'React'],
  //   details: 'Mathgical Calculator',
  //   live: 'https://Mathgic.netlify.app',
  //   source: 'https://github.com/rex-9/Mathgic',
  // }, {
  //   id: 4,
  //   image: images.Pokeverse,
  //   name: 'Pokeverse',
  //   techs: ['JavaScript', 'Webpack'],
  //   details: ['The Pokeverse of Cuteness', 'PokeAPI'],
  //   live: 'https://rex-9.github.io/Pokeverse',
  //   source: 'https://github.com/rex-9/Pokeverse',
  // }, {
  //   id: 3,
  //   image: images.ToDoList,
  //   name: 'To-Do List',
  //   techs: ['JavaScript', 'Webpack'],
  //   details: 'List of Determination',
  //   live: 'https://rex-9.github.io/ToDoList',
  //   source: 'https://github.com/rex-9/ToDoList',
  // }, {
  //   id: 2,
  //   image: images.Leaderboard,
  //   name: 'Leaderboard',
  //   techs: ['JavaScript', 'Webpack'],
  //   details: 'Board of Talents',
  //   live: 'https://rex-9.github.io/Leaderboard',
  //   source: 'https://github.com/rex-9/Leaderboard',
  // }, {
  // id: 1,
  // image: images.Landsbetween,
  // name: 'Landsbetween',
  // techs: ['JavaScript'],
  // details: ['Call of the Landsbetween'],
  // live: 'https://rex-9.github.io/Landsbetween',
  // source: 'https://github.com/rex-9/Landsbetween',
  // }, {
  //   id: 8,
  //   image: images.AwesomeBooks,
  //   name: 'Awesomebooks',
  //   techs: ['JavaScript'],
  //   details: ['Books of Awesomeness', 'Manage Books and Authors'],
  //   live: 'https://rex-9.github.io/AwesomeBooks/',
  //   source: 'https://github.com/rex-9/AwesomeBooks',
  // }, {
  //   id: 9,
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
  platform: 'Bento',
  username: 'rex9',
  link: 'https://bento.me/rex9',
  logo: icons.bento,
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
  // }, {
  //   platform: 'Instagram',
  //   username: 'htetnaing0814',
  //   link: 'https://www.instagram.com/htetnaing0814/',
  //   logo: icons.instagram,
}];

const skills = {
  languages: [
    { name: 'JavaScript', url: 'https://www.javascript.com' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'Ruby', url: 'https://www.ruby-lang.org/en/' },
    { name: 'PHP', url: 'https://www.php.net' },
    { name: 'Dart', url: 'https://dart.dev' },
    { name: 'Python', url: 'https://www.python.org' },
  ],
  frontend: [
    { name: 'ReactJS', url: 'https://reactjs.org' },
    { name: 'ReduxJS', url: 'https://redux.js.org' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com' },
    { name: 'AlpineJS', url: 'https://alpinejs.dev' },
    { name: 'Livewire', url: 'https://laravel-livewire.com' },
    { name: 'Filament', url: 'https://filamentphp.com/' },
    { name: 'Orchid', url: 'https://orchid.software/en/' },
    { name: 'Quasar', url: 'https://quasar.dev/' },
    { name: 'Flutter', url: 'https://www.flutter.dev' },
  ],
  backend: [
    { name: 'Ruby on Rails', url: 'https://rubyonrails.org' },
    { name: 'Node JS', url: 'https://nodejs.org/en' },
    { name: 'Laravel', url: 'https://laravel.com' },
    { name: 'Flask', url: 'https://flask.palletsprojects.com/en/3.0.x/' },
  ],
  database: [
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
    { name: 'MySQL', url: 'https://www.mysql.com/' },
    { name: 'NoSQL', url: 'https://en.wikipedia.org/wiki/NoSQL' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
  ],
  mobile: [
    { name: 'Flutter', url: 'https://www.flutter.dev' },
    { name: 'Dart', url: 'https://dart.dev' },
    { name: 'GetX', url: 'https://pub.dev/packages/get' },
    { name: 'BLoC', url: 'https://pub.dev/packages/flutter_bloc' },
    { name: 'Bitrise', url: 'https://bitrise.io/' },
  ],
  tools: [
    { name: 'OpenAI', url: 'https://openai.com/' },
    { name: 'Stripe', url: 'https://stripe.com/' },
    { name: 'Cloudinary', url: 'https://cloudinary.com/' },
    { name: 'AWS', url: 'https://aws.amazon.com/' },
    { name: 'Termius', url: 'https://termius.com/' },
    { name: 'Pm2', url: 'https://pm2.io/' },
    { name: 'GitHub', url: 'https://github.com/' },
    { name: 'Vercel', url: 'https://vercel.com/' },
  ]
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
