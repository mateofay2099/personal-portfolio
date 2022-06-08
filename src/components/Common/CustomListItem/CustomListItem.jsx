import React from 'react';
import ArrowItem from '@myIcons/arrowItem.svg';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import './CustomListItem.css';

const CustomListItem = ({ description, subItems }) => {
  const { currentTheme } = useThemeContext();

  return (
    <div className="customListItem" data-cy="customListItem">
      <li className="mainItem">
        <ArrowItem className="arrowItem shimmer" fill={currentTheme.primary} />
        <p>{description}</p>
      </li>
      <ul>
        {subItems &&
          subItems.map(({ description }, i) => (
            <li className="subItem" data-cy="customListItem-subItem" key={`subItem-${i}`}>
              <div className="customSubItemArrow" />
              <p>{description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomListItem;
