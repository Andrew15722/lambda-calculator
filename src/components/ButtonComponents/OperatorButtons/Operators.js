import React, { useState } from 'react';

//import any components needed
import OperatorButton from './OperatorButton.js';

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
	// STEP 2 - add the imported data to state

	const [ operatorState, setOperatorState ] = useState(operators);
	return (
		<div>
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
	   it any props needed by the child component*/}
			{operatorState.map((operator, index) => {
				// always add a key to a map
				// returned the operator char but not the value, may need to come back.
				// operators is an object so I had to access it by using dot notation. don't forget
				return <OperatorButton operator={operator.char} key={index} />;
			})}
		</div>
	);
};

export default Operators;
