import React from 'react';

const SpecialButton = ({ special }) => {
	return (
		<div className="divBtn">
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="specialBtn">{special}</button>
		</div>
	);
};

export default SpecialButton;
