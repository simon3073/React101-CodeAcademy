import React from 'react';
import ReactDOM from 'react-dom';

// Variables
const myList = (
	<ul>
		<li>one</li>
		<li>two</li>
		<li>three</li>
	</ul>
);

ReactDOM.render(myList, document.getElementById('app'));

// Event Listeners > adding variables in {}
function makeDoggy(e) {
	// Call this extremely useful function on an <img>.
	// The <img> will become a picture of a doggy.
	e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
	e.target.setAttribute('alt', 'doggy');
}

const kitty = <img src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" alt="kitty" onClick={makeDoggy} />;

ReactDOM.render(kitty, document.getElementById('app'));

// If Else
function coinToss() {
	// This function will randomly return either 'heads' or 'tails'.
	return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
	kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
	doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
	img = <img src={pics.kitty} />;
} else {
	img = <img src={pics.doggy} />;
}

ReactDOM.render(img, document.getElementById('app'));

// same as above but with ternary operator
const img2 = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
ReactDOM.render(img2, document.getElementById('app'));

// && operator
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
	<div>
		<h1>My Favorite Foods</h1>
		<ul>
			<li>Sushi Burrito</li>
			<li>Rhubarb Pie</li>
			{!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
			<li>Broiled Grapefruit</li>
		</ul>
	</div>
);

// .map
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person) => <li>{person}</li>);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

// Keys
const peopleLis2 = people.map((person, i) => <li key={'person_' + i}>{person}</li>);

const displayFact = (e) => {
	const randNum = Math.floor(Math.random() * (2 + 1));
	const animalFact = animals[e.target.alt].facts[randNum];
	document.getElementById('fact').innerHTML = animalFact;
};
