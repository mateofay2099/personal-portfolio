export default {
  // Common
  comingSoon: () => 'Coming Soon',

  // Home
  'home.name.introduction': () => 'Hi, I am',
  'home.profession': () => 'Fullstack Developer',
  'home.introduction.description1': ({ age }) =>
    `I am ${age} years old. I started working on software development when I was 19 years old, although I had already learned the basics of programming in a self-taught way.`,
  'home.introduction.description2': () =>
    'I love what I do and I am constantly looking for learning new technologies and improving my current skills.',
  'home.aboutMe.button': () => 'About Me',

  'home.navBar.selectLanguage': () => 'Select Language',
  'home.navBar.english': () => 'English',
  'home.navBar.spanish': () => 'Spanish',

  'home.aboutMeModal.location.title': () => 'Location',
  'home.aboutMeModal.location.description': () =>
    'I have lived in Campana my whole life, a city in the north of Buenos Aires, Argentina. Thanks to the rise of remote work, I am now able to work from wherever I want, something that I am planning to take advantage of in the near future. Although I am really comfortable with this way of working, I would also be willing to work in an office in another country, because I would really like to settle in a new interesting place.',
  'home.aboutMeModal.hobbies.title': () => 'Hobbies',
  'home.aboutMeModal.hobbies.description': () =>
    'Besides programming, in my free time I like to hang out with friends, play the guitar, go to the gym and spend some time at home with my two beautiful cats. I also really like to cook, especially meals, but every now and then I enjoy baking a cake.',
  'home.aboutMeModal.longTermPlan.title': () => 'Long term plan',
  'home.aboutMeModal.longTermPlan.description': () =>
    'Although I am currently working as a fullstack developer, in the future I would like to move on to data science and machine learning. I find this area really interesting, and extremely important in the future of technology.',

  // Experience
  'experience.title': () => 'Experience',
  'experience.card.international': () =>
    'With really good communication skills both in Spanish and in English, I have worked for clients from different countries all around the world. I have currently developed applications for more than 8 countries.',
  'experience.card.responsive': () =>
    'Vast experience in responsive design. I have developed flexible interfaces that adapt to different screen sizes, to ensure a good user experience regardless the device being used',
  'experience.card.courses': ({ coursesCount } = {}) =>
    `I am constantly improving my skills, practicing in personal projects, solving algorithms, and taking courses to learn new things. Currently made over ${coursesCount} courses.`,
  'experience.card.excellence': () =>
    'I always aim for excellence. As an unquestionable rule, I always apply best practices to guarantee clean and scalable code, with meticulous tests to avoid error prone code.',
  'experience.card.agile': () =>
    'Lot of experience working with Agile methodologies, mostly scrum. Thanks to the application of agile fundamentals, I can ensure that the client gets a clear notion of all progress, be prepare for changes in product requirements, and always prioritize providing value to the end user.',
  'experience.card.fullstack': () =>
    'I have technical knowledge from web and mobile frontend design to backend logic, entities design and creation, database handling, data security and deployment on productive servers.',

  // Portfolio
  'portfolio.title': () => 'Portfolio',
  'portfolio.card.personalPortfolio.title': () => 'Personal Portfolio Website',
  'portfolio.card.personalPortfolio.description': () =>
    'Click on the card to see the GitHub repository for this website',

  // Footer
  'footer.customizeTitle': () => 'Do not like the page?',
  'footer.customizeButton': () => 'Customize it',
  'footer.customizableOption.primary': () => 'Primary',
  'footer.customizableOption.secondary': () => 'Secondary',
  'footer.customizableOption.background': () => 'Background',
  'footer.customizableOption.text': () => 'Text',
};
