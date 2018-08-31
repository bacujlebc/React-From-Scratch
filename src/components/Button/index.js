import React from 'react';
import './styles.scss';

const Button = ({ name, className, onClick, children }) => {
	return (
		<button type="button" className={className} onClick={onClick}>
			{name}
			{children}
		</button>
	);
};

export default Button;
