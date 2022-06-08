import platziLogo from '@images/platforms/platzi.png';
import awsLogo from '@images/platforms/aws.png';
import pluralsightLogo from '@images/platforms/pluralsight.png';

const GROUPED_COURSES = [
  {
    title: 'Platzi',
    logo: platziLogo,
    key: 'platform-platzi',
    courses: [
      { courseKey: 'courses.platzi.fundamentals' },
      { courseKey: 'courses.platzi.git' },
      { courseKey: 'courses.platzi.cmd' },
      { courseKey: 'courses.platzi.htmlcss.definitive' },
      { courseKey: 'courses.platzi.htmlcss.practical' },
      { courseKey: 'courses.platzi.responsive' },
      { courseKey: 'courses.platzi.frontend' },
      { courseKey: 'courses.platzi.frontend.practical' },
      { courseKey: 'courses.platzi.design' },
      { courseKey: 'courses.platzi.grid' },
      { courseKey: 'courses.platzi.js.practical' },
      { courseKey: 'courses.platzi.js.async' },
      { courseKey: 'courses.platzi.js.es6' },
      { courseKey: 'courses.platzi.js.professional' },
      { courseKey: 'courses.platzi.npm' },
      { courseKey: 'courses.platzi.node' },
      { courseKey: 'courses.platzi.webpack' },
      { courseKey: 'courses.platzi.react.practical' },
      { courseKey: 'courses.platzi.next.practical' },
      { courseKey: 'courses.platzi.next.professional' },
    ],
  },
  {
    title: 'Amazon Web Services',
    logo: awsLogo,
    key: 'platform-aws',
    courses: [{ courseKey: 'courses.aws.cloudPractitioner' }],
  },
  {
    title: 'Pluralsight',
    logo: pluralsightLogo,
    key: 'platform-pluralsight',
    courses: [
      { courseKey: 'courses.pluralsight.reactRoleIQ' },
      { courseKey: 'courses.pluralsight.reactNative' },
      {
        courseKey: 'courses.pluralsight.buildingWebApps',
        subItems: [
          { descriptionKey: 'courses.pluralsight.buildingWebApps.js' },
          { descriptionKey: 'courses.pluralsight.buildingWebApps.html' },
          { descriptionKey: 'courses.pluralsight.buildingWebApps.css' },
          { descriptionKey: 'courses.pluralsight.buildingWebApps.redux' },
          { descriptionKey: 'courses.pluralsight.buildingWebApps.git' },
          { descriptionKey: 'courses.pluralsight.buildingWebApps.npm' },
          { descriptionKey: 'courses.pluralsight.buildingWebApps.es6' },
        ],
      },
    ],
  },
];
export default GROUPED_COURSES;
