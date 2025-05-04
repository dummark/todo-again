import React, { Component } from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
	render() {
		const { todos, onDeleted, onToggleComplete, onToggleEdit, onUpdateLabel } =
			this.props;

		const elements = todos.map(item => {
			const { id, ...itemProps } = item;

			return (
				<TodoListItem
					{...itemProps}
					key={id}
					onDeleted={() => onDeleted(id)}
					onToggleComplete={() => onToggleComplete(id)}
					onToggleEdit={() => onToggleEdit(id)}
					onSubmit={newLabel => onUpdateLabel(id, newLabel)}
				/>
			);
		});

		return <ul className='todo-list'>{elements}</ul>;
	}
}
