import React from 'react';

import './Card.css';
const Card =({id ,name ,img ,brief}) =>{
	return(
		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 decorate container'>
			<img alt='comics' src= {img} width = '150px' height='150px' />
			<div>
				<h2>{name}</h2>
				<p>{id}</p>
				<div className="overlay">
				    <div className="text">
				    	Short {name}
				    </div>
				</div>
			</div>
		</div>
	);
}
export default Card;