import propTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
	return (
		<button onClick={onClick} className="btn" style={{backgroundColor: color}}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'cyan',
	text: 'mama',
};
Button.propTypes = {
	color: propTypes.string,
	text: propTypes.string,
	onClick: propTypes.func,
};
export default Button;
