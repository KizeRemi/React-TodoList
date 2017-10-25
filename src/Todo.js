import React, { Component } from 'react';

type TodoProps = {}
type TodoState = {
	date: date
};

class Todo extends React.Component<TodoProps, TodoState> {
	constructor(props: TodoProps) {
		super(props);
		this.toggleTodo = this.toggleTodo.bind(this);
		this.state = { todos: [] };
	}
	toggleTodo(i) {
		this.props.todos[i].complete = !this.props.todos[i].complete;
		this.setState({
			todos: this.props.todos,
		});
	}

	shouldComponentUpdate(nextProps: TodoProps, nextState: TodoState){
		return true;
	}
	componentWillUpdate(nextProps: TodoProps, nextState: TodoState){
	}
  
	componentWillUnmount() {
		//TODO
	}
  
	render() {
		const todos = this.props.todos.map((item, i) => (
			<li onClick={() => this.toggleTodo(i)} className={(item.complete ? 'done' : '')} key={i}>
			  { item.label }
			</li>
		));
		return (
			<ul>{todos}</ul>
		);
	}
}
export default Todo;