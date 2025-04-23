import React from 'react';

import Header from '../header';
import TodoList from '../todo-list';
import Footer from '../footer';

import './app.css';

const App = () => {
	const todoData = [
		{ label: 'Completed task', completed: false, editing: false, id: 1 },
		{ label: 'Editing task', completed: false, editing: false, id: 2 },
		{ label: 'Active task', completed: false, editing: false, id: 3 },
	];

	return (
		<div className='todoapp'>
			<Header toDo={1} done={3} />
			<div className='main'>
				<TodoList todos={todoData} />
				<Footer />
			</div>
		</div>
	);
};

export default App;
