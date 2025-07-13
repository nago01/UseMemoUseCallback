import React from 'react';

export const ChildComponent = React.memo((props) => {
  const { func } = props;

  return <>{func(1)}</>;
});
