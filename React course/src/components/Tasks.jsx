import propTypes from 'prop-types';
import Task from './Task';
const Tasks = ({tasks, onDeletejajka, onDblClick}) => {
	return (
		<>
			{tasks.map((task) => (
				//przy mapowaniu wywala blad poniewaz kazdy element z listy powinien miec swoje unikalne id
				<Task key={task.id} task={task} onDeletejajoo={onDeletejajka} onDblClick={onDblClick} />
			))}
		</>
	);
};
// propTypes to dakie testy / blokady dla innych wartosci
Tasks.propTypes = {
	tasks: propTypes.array,
	onDeletejajka: propTypes.func,
	onDblClick: propTypes.func,
};
export default Tasks;
