import React from 'react';
import FancyTable from './FancyTable';

export default function Multiple({ name, number }) {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <FancyTable n={number} />
    </React.Fragment>
  );
}
