import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'complete', label: 'Complete' },
	];

	render() {
		const { toDo, filter, onFilterChange, onDeleteComplete } = this.props;

		const buttons = this.buttons.map(({ name, label }) => {
			const isActive = filter === name;
			const clazz = isActive ? 'selected' : '';
			return (
				<li key={name}>
					<button
						type='button'
						className={clazz}
						onClick={() => onFilterChange(name)}
					>
						{label}
					</button>
				</li>
			);
		});

		return (
			<footer className='footer'>
				<span className='todo-count'>{toDo} items left</span>
				<ul className='filters'>{buttons}</ul>
				<button className='clear-completed' onClick={() => onDeleteComplete()}>
					Clear completed
				</button>
			</footer>
		);
	}
}
