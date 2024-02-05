import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ paths }) => {
  return (
    <div className="breadcrumbs">
      {
      paths.map((path, index) => (
        <span key={index}>
          {index > 0 && <span className="breadcrumb-separator"> / </span>}
          {
          path.url ? (
            <Link to={path.url} className="breadcrumb-link">
              {path.label}
            </Link>
          ) : (
            <span className="breadcrumb-label">{path.label}</span>
          )
          }
        </span>
      ))
      }
    </div>
  );
};

export default Breadcrumbs;
