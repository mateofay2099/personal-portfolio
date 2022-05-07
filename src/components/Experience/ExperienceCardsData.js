import agileIcon from '@myIcons/cards/agile.svg';
import coursesIcon from '@myIcons/cards/courses.svg';
import excellenceIcon from '@myIcons/cards/excellence.svg';
import fullstackIcon from '@myIcons/cards/fullstack.svg';
import internationalIcon from '@myIcons/cards/international.svg';
import responsiveIcon from '@myIcons/cards/responsive.svg';

export const CARDS = [
  {
    descriptionKey: 'experience.card.responsive',
    Icon: responsiveIcon,
    key: 'experienceCards_responsive',
  },
  {
    descriptionKey: 'experience.card.international',
    Icon: internationalIcon,
    key: 'experienceCards_international',
  },
  {
    descriptionKey: 'experience.card.courses',
    descriptionTextParams: { coursesCount: 20 },
    Icon: coursesIcon,
    key: 'experienceCards_courses',
  },
  {
    descriptionKey: 'experience.card.excellence',
    Icon: excellenceIcon,
    key: 'experienceCards_excellence',
  },
  {
    descriptionKey: 'experience.card.agile',
    Icon: agileIcon,
    key: 'experienceCards_agile',
  },
  {
    descriptionKey: 'experience.card.fullstack',
    Icon: fullstackIcon,
    key: 'experienceCards_fullstack',
  },
];
