import agileIcon from '@myIcons/cards/agile.svg';
import coursesIcon from '@myIcons/cards/courses.svg';
import excellenceIcon from '@myIcons/cards/excellence.svg';
import fullstackIcon from '@myIcons/cards/fullstack.svg';
import internationalIcon from '@myIcons/cards/international.svg';
import responsiveIcon from '@myIcons/cards/responsive.svg';
import Courses from '@components/Experience/AdditionalComponents/Courses/Courses';
import Technologies from '@components/Experience/AdditionalComponents/Technologies/Technologies';

export const CARDS = [
  {
    descriptionKey: 'experience.card.responsive',
    Icon: responsiveIcon,
    key: 'experienceCards-responsive',
  },
  {
    descriptionKey: 'experience.card.international',
    Icon: internationalIcon,
    key: 'experienceCards-international',
  },
  {
    AdditionalComponent: Courses,
    descriptionKey: 'experience.card.courses',
    descriptionTextParams: { coursesCount: 20 },
    Icon: coursesIcon,
    key: 'experienceCards-courses',
  },
  {
    descriptionKey: 'experience.card.excellence',
    Icon: excellenceIcon,
    key: 'experienceCards-excellence',
  },
  {
    descriptionKey: 'experience.card.agile',
    Icon: agileIcon,
    key: 'experienceCards-agile',
  },
  {
    AdditionalComponent: Technologies,
    descriptionKey: 'experience.card.fullstack',
    Icon: fullstackIcon,
    key: 'experienceCards-fullstack',
  },
];
