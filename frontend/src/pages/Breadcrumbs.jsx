import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
  return (
    <div>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <Link to={path}>{path}</Link>
          {index < paths.length - 1 && ' > '}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;