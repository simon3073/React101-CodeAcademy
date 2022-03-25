// props children from a <li></li>

// app.JS
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
	render() {
		return (
			<div>
				<List type="Living Musician">
					<li>Sachiko M</li>
					<li>Harvey Sid Fisher</li>
				</List>
				<List type="Living Cat Musician">
					<li>Nora the Piano Cat</li>
				</List>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

// list JS
import React from 'react';

export class List extends React.Component {
	render() {
		let titleText = `Favorite ${this.props.type}`;
		if (this.props.children instanceof Array) {
			titleText += 's';
		}
		return (
			<div>
				<h1>{titleText}</h1>
				<ul>{this.props.children}</ul>
			</div>
		);
	}
}

// default props
class Button extends React.Component {
	render() {
		return <button>{this.props.text}</button>;
	}
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
	// <Button text=''/>,
	document.getElementById('app')
);
