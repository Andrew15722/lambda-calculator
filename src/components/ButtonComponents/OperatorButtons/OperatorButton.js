import React from 'react';

const OperatorButton = ({ operator }) => {
	return (
		<div className="divBtn">
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			{/* the operator prop is going to be accessed through an attribute in the operator.js file */}
			<button className="operatorBtn">{operator}</button>
		</div>
	);
};

export default OperatorButton;
