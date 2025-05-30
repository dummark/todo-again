import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
	state = {
		label: '',
	};

	onLabelChange = e => {
		this.setState({ label: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		this.setState({ label: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type='text'
					onChange={this.onLabelChange}
					className='new-todo'
					placeholder='What needs to be done?'
					autoFocus
					value={this.state.label}
				/>
			</form>
		);
	}
}
