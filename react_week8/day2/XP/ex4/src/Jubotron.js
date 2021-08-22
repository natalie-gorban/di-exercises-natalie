import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Jumbotron = (props) => {
  const {title, description, buttonLabel, buttonUrl} = props
  return (
    <div className="p-5 bg-light">
    <h1 className="mb-3">{title}</h1>
    <h4 className="mb-3">{description}</h4>
    <a className="btn btn-primary" href={buttonUrl} role="button">{buttonLabel}</a>
  </div>
  );
}

export default Jumbotron;
