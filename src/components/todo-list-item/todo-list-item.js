import React, { Component } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import './todo-list-item.css';

export default class TodoListItem extends Component {
	state = {
		localLabel: this.props.label,
	};

	onLocalLabelChange = e => {
		this.setState({ localLabel: e.target.value });
	};

	onLocalSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.localLabel);
		this.props.onToggleEdit();
	};

	render() {
		const {
			label,
			onDeleted,
			onToggleEdit,
			onToggleComplete,
			complete,
			editing,
			createTime,
		} = this.props;

		let classNames = '';
		let isEdit = '';

		if (complete) {
			classNames += ' completed';
		}

		if (editing) {
			classNames += ' editing';
			isEdit = (
				<form onSubmit={this.onLocalSubmit}>
					<input
						type='text'
						onChange={this.onLocalLabelChange}
						className='edit'
						value={this.state.localLabel}
					/>
				</form>
			);
		}

		return (
			<li className={classNames}>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						onClick={onToggleComplete}
					/>
					<label>
						<span className='description'>{label}</span>
						<span className='created'>
							created {formatDistanceToNowStrict(createTime)} ago
						</span>
					</label>
					<button className='icon icon-edit' onClick={onToggleEdit}></button>
					<button className='icon icon-destroy' onClick={onDeleted}></button>
				</div>
				{isEdit}
			</li>
		);
	}
}
