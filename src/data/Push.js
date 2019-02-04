import React from 'react';
// import Data from '../data/data.json';
import Card from '../components/Card';

const Push = ({ data }) => {
	return (
		<div>
			{
					data.map((user, i) =>{
					return (
					<Card 
						key ={i}
						id={data[i].id} 
						name={data[i].name} 
						img={data[i].img}
						brief={data[i].brief}
					/>
					);
				})
			}
		</div>
	);
}

export default Push;