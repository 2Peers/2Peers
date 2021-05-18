import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ClassListing({ classroom }) {
  return (
    <Link to={`/classroom/${classroom}`} className="class-instance rounded shadow-2xl text-gray-700 font-bold px-8 py-6 w-3/5">
      <div>
        <div className="class-heading">
          Name of Class(get from props)
          {classroom}
        </div>
      </div>
    </Link>
  );
}

ClassListing.propTypes = {
  classroom: PropTypes.number,
};

ClassListing.defaultProps = {
  classroom: null,
};
