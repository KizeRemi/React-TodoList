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
		this.changeFilter = this.changeFilter.bind(this);
		this.state = {
			term: '',
			todos: [],
			filter: ''
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

	changeFilter(event) {
		if(event.target.value === 'complete') {
			this.setState({ filter: true});
		}
		if(event.target.value === 'todo') {
			this.setState({ filter: false});
		}
		if(event.target.value === 'all') {
			this.setState({ filter: ''});
		}
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
		let filteredTodos = this.state.todos;
		if (this.state.filter !== '') {
			filteredTodos = this.state.todos.filter((item) => item.complete == this.state.filter );
		}
		return (
			<div>
				<form className="App" onSubmit={this.onSubmit}>
					<label>
					Nom:
						<input type="text" value={this.state.term} onChange={this.onChange} />
					</label>
					<input type="submit" value="Submit" />
					<Todo todos={filteredTodos}/>
					<div>
						Filtre:  
						<input type="radio" name="filter" value="all" onChange={this.changeFilter} /> Tous
						<input type="radio" name="filter" value="complete" onChange={this.changeFilter} /> Terminés
						<input type="radio" name="filter" value="todo" onChange={this.changeFilter} /> A faire
					</div>
				</form>
			</div>
		);
	}
}
export default App; 
