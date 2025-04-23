import React, { Component } from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
	render() {
		const { todos } = this.props;

		const elements = todos.map(item => {
			const { id, ...itemProps } = item;

			return <TodoListItem {...itemProps} key={id} />;
		});

		return <ul className='todo-list'>{elements}</ul>;
	}
}
