import propTypes from 'prop-types';
import Button from './Button';
const header = ({title, onAdd, showAdd}) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add'}
				onClick={onAdd}></Button>
		</header>
	);
};

header.defaultProps = {
	title: 'Task Tracker',
};

header.propTypes = {
	title: propTypes.string.isRequired,
};
// const stylingHeader = {
// 	color: 'red',
// 	backgroundColor: 'cyan',
// };
export default header;
