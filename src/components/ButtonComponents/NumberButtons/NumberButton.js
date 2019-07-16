import React from 'react';

const NumberButton = ({ number }) => {
	return (
		<div>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			{/* the number prop is going to be accessed through an attribute in the number.js file */}
			<button>{number}</button>
		</div>
	);
};

export default NumberButton;
