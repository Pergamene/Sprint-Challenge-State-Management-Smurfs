import React from 'react';

const Smurf = props => {
  const { name, age, height } = props.data;

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  );
};

export default Smurf;
