import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	//state to stale informacje ktore nie wolno zmieniac ,a tylko update'owac , mozna je jako props wyslac do innych elementow by czerpac z  nich informacje (inaczej hook , mam jedzenie i rzucame kotwiczke do innego miejsca)
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Food Shopping',
			day: 'Feb 6th at 1:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Gaming',
			day: 'Nov 22th at 5:30pm',
			reminder: false,
		},
		{
			id: 3,
			text: 'Swimming',
			day: 'Feb 25th at 3:30pm',
			reminder: true,
		},
	]);
	// add task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000 + 1);
		const newTask = {id, ...task};
		setTasks([...tasks, newTask]);
	};
	//usuwanie taskow
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)));
	};
	return (
		//przyklad props na dole kolo tasks= {}
		//onDelete to przykladowa nazwa , mozesz  nazwac ja jako jajka nawet
		//props to polaczenia miedzy elementami, jest to mozliwosc wyslanie pewnydh informacji
		// laczenie js z html , sprawdzamy czy ilosc id'ikow jest wieksza od 0 jesli tak pokaze nie w innym przypadku pokaz komunikat
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask}></AddTask>}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDeletejajka={deleteTask} onDblClick={toggleReminder}></Tasks>
			) : (
				'No tasks to complete'
			)}
		</div>
	);
};
export default App;
