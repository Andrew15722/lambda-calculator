import React, { useState } from 'react';

//import any components needed
import SpecialButton from './SpecialButton.js';
//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = () => {
	// STEP 2 - add the imported data to state
	const [ specialState, setSpecialState ] = useState(specials);
	return (
		<div className="specials">
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
			{specialState.map((special, index) => {
				// always add a key to a map
				// returned the operator char but not the value, may need to come back.
				// now we're back to using arrays instead of objects.
				return <SpecialButton special={special} key={index} />;
			})}
		</div>
	);
};

export default Specials;
