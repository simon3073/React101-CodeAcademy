import React from 'react';

export class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	render() {
		return <div>{this.props.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString()}</div>;
	}

	startInterval() {
		let delay = this.props.isPrecise ? 100 : 1000;
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, delay);
	}

	componentDidMount() {
		this.startInterval();
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	componentDidUpdate(prevProps) {
		if (this.props.isPrecise === prevProps.isPrecise) return;
		this.startInterval();
	}
}
