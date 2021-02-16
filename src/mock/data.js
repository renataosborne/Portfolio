import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Renata Osborne | Full Stack Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Renata Osborne',
  subtitle: 'Full Stack Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I’m originally from the Czech Republic but have also lived in France where I received my Bachelors in Chinese. I have a background in project management but a passion for software engineering.',
  paragraphTwo: 'My last role was a project manager where I managed developing and implementing a training and education program, which included creating all the work manuals for the entire department. Also I implemented SAP from AS400 with a group of engineers.I learned through then that I loved coding and began my process to becoming a developer myself.',
  paragraphThree: 'My skills are in Python and Javascript and I am familiar with Java. I have a desire to learn as many languages and frameworks for diversity. ',
  resume: 'https://www.linkedin.com/in/renata-osborne-5a3569190/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Recipe Search',
    info: 'Recipe search engine',
    info2: 'React.js, Node.js, Edamam API, CSS, HTML5',
    url: 'https://festive-euclid-85a53c.netlify.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'To Do List',
    info: 'JavaScript To Do List',
    info2: 'JavaScript, CSS, HTML5',
    url: 'https://to-do-list-ro.netlify.app',
    repo: 'https://github.com/renataosborne/To-Do-List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'About Me Webpage',
    info: 'Simple one page about me website',
    info2: 'JavaScript, CSS, HTML5',
    url: 'https://tender-booth-c2bae1.netlify.app',
    repo: 'https://github.com/renataosborne/intern-interviews/blob/main/src/interns/renata_osborne/index.html', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'renata.se.osborne@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/renata-osborne-5a3569190/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/renataosborne',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
