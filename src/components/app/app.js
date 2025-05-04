import React, { Component } from 'react';

import Header from '../header';
import TodoList from '../todo-list';
import Footer from '../footer';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

export default class App extends Component {
	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('one'),
			this.createTodoItem('two'),
			this.createTodoItem('three'),
		],
		filter: 'all',
	};

	createTodoItem(label) {
		return {
			label,
			editing: false,
			complete: false,
			id: this.maxId++,
			createTime: Date.now(),
		};
	}

	deleteItem = id => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex(el => el.id === id);

			return {
				todoData: todoData.toSpliced(idx, 1),
			};
		});
	};

	addItem = text => {
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			return {
				todoData: [...todoData, newItem],
			};
		});
	};

	toggleProperty(arr, id, proName) {
		const idx = arr.findIndex(el => el.id === id);

		const oldItem = arr[idx];
		const newItem = { ...oldItem, [proName]: !oldItem[proName] };

		return arr.toSpliced(idx, 1, newItem);
	}

	onToggleComplete = id => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'complete'),
			};
		});
	};

	onToggleEdit = id => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'editing'),
			};
		});
	};

	onUpdateLabel = (id, newLabel) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex(item => item.id === id);
			const oldItem = todoData[idx];
			const updatedItem = { ...oldItem, label: newLabel };

			return {
				todoData: todoData.toSpliced(idx, 1, updatedItem),
			};
		});
	};

	filter(items, filter) {
		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter(item => !item.complete);
			case 'complete':
				return items.filter(item => item.complete);
			default:
				return items;
		}
	}

	onFilterChange = filter => {
		this.setState({ filter });
	};

	onDeleteComplete = () => {
		this.setState(({ todoData }) => {
			const activeTodos = todoData.filter(el => !el.complete);

			return {
				todoData: activeTodos,
			};
		});
	};

	render() {
		const { todoData, filter } = this.state;

		const filters = this.filter(todoData, filter);

		const completeCount = todoData.filter(el => el.complete).length;

		const todoCount = todoData.length - completeCount;

		return (
			<div className='todoapp'>
				<Header />
				<ItemAddForm onItemAdded={this.addItem} />
				<div className='main'>
					<TodoList
						todos={filters}
						onDeleted={this.deleteItem}
						onToggleComplete={this.onToggleComplete}
						onToggleEdit={this.onToggleEdit}
						onUpdateLabel={this.onUpdateLabel}
					/>
					<Footer
						toDo={todoCount}
						filter={filter}
						onFilterChange={this.onFilterChange}
						onDeleteComplete={this.onDeleteComplete}
					/>
				</div>
			</div>
		);
	}
}
