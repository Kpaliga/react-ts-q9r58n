import React from 'react';

export default function FancyTable({ n }) {
  let numbers = [...Array(n).keys()];

  let listItems = numbers.map((number) => (
    <li key={number.toString()}>{number + 1}</li>
  ));
  return (
    <React.Fragment>
      <ul>{listItems}</ul>
    </React.Fragment>
  );
}
