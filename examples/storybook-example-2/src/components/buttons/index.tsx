import React from 'react';

type ButtonType = {
	style: object;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	buttonText: string
};

export function Button({ style, onClick, buttonText }: ButtonType) {
	return (
		<button className='primary-button' style={style} onClick={onClick}>{buttonText}</button>
	);
}
