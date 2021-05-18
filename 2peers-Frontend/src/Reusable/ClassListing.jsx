import React from 'react';
import PropTypes from 'prop-types';

export default function ClassListing({ classroom }) {
  return (
    <div className="class-instance rounded shadow-2xl text-gray-700 font-bold px-8 py-6 w-3/5">
      <div className="class-heading">
        Name of Class(get from props)
        {classroom}
      </div>
    </div>
  );
}

ClassListing.propTypes = {
  classroom: PropTypes.number,
};

ClassListing.defaultProps = {
  classroom: null,
};
