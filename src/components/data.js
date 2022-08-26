import Pokeverse from '../assets/projects/Pokeverse.png';
import Mathgic from '../assets/projects/Mathgic.png';
import Leaderboard from '../assets/projects/Leaderboard.png';
import ToDoList from '../assets/projects/ToDoList.png';
import Landsbetween from '../assets/projects/Landsbetween-home.png';
import AwesomeBooks from '../assets/projects/AwesomeBooks.png';
import Bookstore from '../assets/projects/Bookstore.png';

const projects = [{
  id: 1,
  image: Mathgic,
  name: 'Mathgic',
  techs: ['JavaScript', 'React'],
  brief: 'Mathgical Calculator',
  live: 'https://Mathgic.netlify.app',
  source: 'https://github.com/rex-9/Mathgic',
}, {
  id: 2,
  image: Pokeverse,
  name: 'Pokeverse',
  techs: ['JavaScript', 'Webpack'],
  brief: 'The Pokeverse of Cuteness',
  live: 'https://rex-9.github.io/Pokeverse',
  source: 'https://github.com/rex-9/Pokeverse',
}, {
  id: 3,
  image: Leaderboard,
  name: 'Leaderboard',
  techs: ['JavaScript', 'Webpack'],
  brief: 'Board of Talents',
  live: 'https://rex-9.github.io/Leaderboard',
  source: 'https://github.com/rex-9/Leaderboard',
}, {
  id: 4,
  image: ToDoList,
  name: 'To-Do List',
  techs: ['JavaScript', 'Webpack'],
  brief: 'List of Determination',
  live: 'https://rex-9.github.io/ToDoList',
  source: 'https://github.com/rex-9/ToDoList',
}, {
  id: 5,
  image: Landsbetween,
  name: 'Landsbetween',
  techs: ['JavaScript'],
  brief: 'Call of the Landsbetween',
  live: 'https://rex-9.github.io/Landsbetween',
  source: 'https://github.com/rex-9/Landsbetween',
}, {
  id: 6,
  image: AwesomeBooks,
  name: 'Awesomebooks',
  techs: ['JavaScript'],
  brief: 'Books of Awesomeness',
  live: 'https://rex-9.github.io/AwesomeBooks/',
  source: 'https://github.com/rex-9/AwesomeBooks',
}, {
  id: 7,
  image: Bookstore,
  name: 'Bookstore',
  techs: ['JavaScript', 'React', 'Redux'],
  brief: 'Store of the Wisdom',
  live: 'https://rex9bookstore.netlify.app',
  source: 'https://github.com/rex-9/Bookstore',
}];

const profiles = [{
  platform: 'GitHub',
  username: 'rex-9',
  link: 'https://github.com/rex-9',
}, {
  platform: 'Linkedin',
  username: 'rex9',
  link: 'https://linkedin.com/in/rex9',
}, {
  platform: 'Angelist',
  username: 'rex9',
  link: 'https://angel.co/u/rex9',
}, {
  platform: 'Medium',
  username: 'rex9',
  link: 'https://medium.com/@rex9',
}, {
  platform: 'Twitter',
  username: 'htetnaing0814',
  link: 'https://twitter.com/htetnaing0814',
}, {
  platform: 'Facebook',
  username: 'htetnaing0814',
  link: 'https://facebook.com/htetnaing0814',
}];

const testimonials = [{
  link: 'https://www.linkedin.com/in/alan-luqman/',
  name: 'Alan Luqman',
  recommendation: "I highly recommend #Htet as a software developer. He is smart and friendly while working and always smile, it's my pleasure to give my recommendation to this gentleman.",
}, {
  link: 'https://www.linkedin.com/in/dorian-urem/',
  name: 'Dorian Urem',
  recommendation: "Htet is a fast learner and works very hard. He was often one of the quickest to finish assignments since he put in the extra hours when he could. He also has a good sense for figuring out problems which I saw when we were working on DSA together. Htet is very friendly and positive and it was always a joy working with him.",
}, {
  link: 'https://www.linkedin.com/in/techieemma/',
  name: 'Nicholas Emmanuel',
  recommendation: "Htet Naing is the sort of developer any company would love to have, I met him while undergoing internship at Microverse and will automatically connected. While I was struggling with some data structure and algorithm I reached out to him and he explained his thought process to me and he made it look easy. He has a way of making complex problem look easy and most importantly he is a fun person to be. So as a junior developer it means a lot to me and I value our relationship. If you need to get your job done simply and efficient effortlessly. Htet Naing is definitely the person for you.",
}, {
  link: 'https://www.linkedin.com/in/asim-khan/',
  name: 'Asim Khan',
  recommendation: "Htet Naing is a very hard working and a brilliant coder. His ability to quickly analyze and solve data structures and algorithms are amazing. He has good knowledge on HTML, JavaScript, React and Redux. I have learned a lot while collaborating with him @ Microverse.",
}]

export { projects, profiles, testimonials };
