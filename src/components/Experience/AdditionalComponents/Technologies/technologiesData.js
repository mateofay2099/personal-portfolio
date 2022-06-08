const TECHNOLOGIES = [
  { description: 'HTML' },
  { description: 'CSS' },
  { description: 'Javascript' },
  { description: 'Webpack' },
  { description: 'Babel' },
  { description: 'ESLint/Prettier' },
  {
    description: 'React.js',
    subItems: [
      { description: 'React-router' },
      { description: 'Jest' },
      { description: 'Cypress' },
      { description: 'Material-UI' },
      { description: 'Formik' },
    ],
  },
  {
    description: 'React Native',
    subItems: [{ description: 'UI Kitten' }],
  },
  {
    description: 'Redux',
    subItems: [{ description: 'Redux-thunk' }, { description: 'Redux-saga' }],
  },
  { description: 'GraphQL' },
  { description: 'Next.js' },
  { description: 'Typescript' },
  {
    description: 'Node.js',
    subItems: [{ description: 'Express' }, { description: 'Sequelize' }],
  },
  { description: 'Docker' },
  { description: 'AWS Services' },
  { description: 'PHP', subItems: [{ description: 'Doctrine' }, { description: 'CodeIgniter' }] },
  {
    description: 'Databases',
    subItems: [
      { description: 'MySQL' },
      { description: 'MSSQL' },
      { description: 'MariaDB' },
      { description: 'MongoDB' },
    ],
  },
  { description: 'GIT' },
];

export default TECHNOLOGIES;
