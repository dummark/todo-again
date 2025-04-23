import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
	state = {
		complete: false,
	};

	onLabelClick = () => {
		this.setState(({ complete }) => {
			return {
				complete: !complete,
			};
		});
	};

	render() {
		const { complete } = this.state;
		const { label } = this.props;

		let classNames = '';

		if (complete) {
			classNames += ' completed';
		}

		return (
			<li className={classNames}>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						onClick={this.onLabelClick}
					/>
					<label>
						<span className='description'>{label}</span>
						<span className='created'>created 17 seconds ago</span>
					</label>
					<button className='icon icon-edit'></button>
					<button className='icon icon-destroy'></button>
				</div>
			</li>
		);
	}
}
