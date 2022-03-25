import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const showBackground = false;
const title = '';
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;

const displayFact = (e) => {
	const randNum = Math.floor(Math.random() * (2 + 1));
	const animalFact = animals[e.target.alt].facts[randNum];
	document.getElementById('fact').innerHTML = animalFact;
};

const images = [];
for (const animal in animals) {
	images.push(<img onClick={displayFact} key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" />);
}

const animalFacts = (
	<div>
		{showBackground && background}
		<div className="animals">{images}</div>
		<p id="fact"></p>
		<h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
	</div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
