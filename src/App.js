// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js';
import style from './style.css';

class App extends Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			term: '',
			todos: []
		};
	}

	onChange(event) {
		this.setState({term: event.target.value});
	}

	onSubmit(event) {
		event.preventDefault();
		let todo = {
			'label': this.state.term,
			'complete': false
		};
		this.setState({
			term: '',
			todos: [...this.state.todos, todo]
		});
	}

	getTodos() {
		fetch('https://api.myjson.com/bins/9l2ez')
			.then(resp => resp.json())
			.then( results => this.setState({ todos: results.todos }));
	}

	componentWillMount() {
		this.getTodos();
	}

	render() {
		return (
			<div>
				<form className="App" onSubmit={this.onSubmit}>
					<label>
					Nom:
						<input type="text" value={this.state.term} onChange={this.onChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<Todo todos={this.state.todos}/>
			</div>
		);
	}
}
export default App; 
