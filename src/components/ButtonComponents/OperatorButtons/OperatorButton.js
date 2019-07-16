import React from 'react';

const OperatorButton = ({ operator }) => {
	return (
		<div>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			{/* the operator prop is going to be accessed through an attribute in the operator.js file */}
			<button>{operator}</button>
		</div>
	);
};

export default OperatorButton;
