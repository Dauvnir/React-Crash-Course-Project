import propTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';
function Task({task, onDeletejajoo, onDblClick}) {
	// przy className masz if statement ,ze jesli prawda dodaj klase
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onDblClick(task.id)}>
			<h3>
				{task.text}{' '}
				<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDeletejajoo(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
}
Task.propTypes = {
	task: propTypes.object,
	onDeletejajoo: propTypes.func,
	onDblClick: propTypes.func,
};
export default Task;
//importowanie icons z  react-icons/fa zamiast fontawesome
