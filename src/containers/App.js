import React, { Component } from 'react';
// import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Navigation from '../components/Navigation';
import Slideshow from '../components/Slideshow';
import Push from '../data/Push';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: '',
			items: [],
			data: [
				{
					id: 'Part 919',
					img: 'https://vignette.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png/revision/latest?cb=20180307050001',
					name: 'One piece',
					brief: 'short onepiece',
				},
				{
					id: 'Part 920 New',
					img: 'https://vignette.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png/revision/latest?cb=20180307050001',
					name: 'One piece',
					brief: 'short onepiece',
				},
				{
					id: 'Part 500',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJQ_PJfiMRrUeK9sLWPD3PkTwN8IaD17dKXC4F73-Rk1ipunfGA',
					name: 'Naruto',
					brief: 'short naruto',
				},
				{
					id: 'Part 1',
					img: 'http://www.box-manga.com/uploads/833e8e71b5e96aa3c084714c7a9b45c4.jpg',
					name: 'Solo Leveling',
					brief: 'short Solo leveling',
				},
				{
					id: 'Part 6',
					img: 'http://www.box-manga.com/uploads/c28b63deddae3bc2859647c6e9d43af3.jpg',
					name: 'Nidome',
					brief: 'short Nidome',
				},
				{
					id: 'Part 82',
					img: 'http://www.box-manga.com/uploads/4c3b75c14ee541fdd7f565a6380fea94.jpg',
					name: 'Dr. Stone',
					brief: 'short Dr. Stone',
				},
				{
					id: 'Part 15',
					img: 'http://www.box-manga.com/uploads/14ca8c2ff1fcb291469699cbef9a2edf.jpg',
					name: 'Eden zero',
					brief: 'short Eden zero',
				},
				{
					id: 'Part 165',
					img: 'http://www.box-manga.com/uploads/1f77b5e2795c952396f9dce158fe95f9.jpg',
					name: 'Martial',
					brief: 'short Martial',
				},
			]
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}))
	}

	onSearchChange = (event) => {		
		this.setState({ searchfield: event.target.value})
	}

	
	render() {		
		
		const { robots, searchfield, data } = this.state;
		// const filteredRobots = robots.filter(robot =>{
		// 	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		// })
		const filteredData = data.filter(detail =>{
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length?
		<h1>Loading</h1>:
			 (
			<div className = 'tc'>
				<Navigation/>
				<SearchBox searchChange={this.onSearchChange}/>
				<br/>
				<Slideshow/>
				<br/>
				<Scroll>
					<Push data={filteredData}/>
				</Scroll>
				<br/>
			</div>
			);
		}
}


export default App;