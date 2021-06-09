import React from 'react';

function Loader(props) {
  if (props.loading) return 'Return Loading Icon Here';
  return <div></div>;
}

export default Loader;
