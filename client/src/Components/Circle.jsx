import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
	const circleStyle = {
    fill: 'red',
    // animation-delay: 2s;
  };
  return (
    <circle
      style={circleStyle}
      cx={props.position.x}
      cy={props.position.y}
      r={props.radius.r}
      //clr="blue"
    />
  );
};

Circle.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};


export default Circle;