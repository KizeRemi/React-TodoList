import React, { Component } from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
  
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
		this.setState({value: event.target.value});
	}
  
	handleSubmit(event) {
		
	}
  
	render() {
		return (

		);
	}
}
export default Form; 
