import React from 'react';

type ButtonType = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ onClick }: ButtonType) {
	return (
		<button className='primary-button' onClick={onClick}>Change background</button>
	);
}
