import React from 'react';

export default function HelloWorld() {
  let name = "Destroyer";

  const user = {
    firstName: 'First',
    lastName: 'Second'
  };

  const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
  };


  return (
    <div>
      <div>Xin chào: {name} và {formatName(user)}</div>
      <div>{name === 'Destroyer' ? 'Xin Chào Destroyer' : `Xin Chào ${formatName(user)}`}</div>

    </div>
  );
}