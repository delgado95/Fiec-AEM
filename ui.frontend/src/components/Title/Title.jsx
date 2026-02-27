import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';


export const TitleMyComponent = ({ title, type }) => {
  if (!title) {
    return null;
  }

  const Tag = type || 'h2';

  return (
    <Tag className="cmp-title">
      {title}
    </Tag>
  );
};

export const TitleEditConfig = {
  emptyLabel: 'Título',
  isEmpty: (props) => {
    return !props || !props.title || props.title.trim().length === 0;
  }
};



