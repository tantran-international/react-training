import React from 'react';
import { Button } from '../buttons';
import { useState } from 'react';

type CardType = {
	name: string,
	phone: string,
}

export function Card({ name, phone }: CardType) {
	const [backgroundColor, setBackgroundColor] = useState('white');

	const Colors = ['blue', 'brown', 'yellow', 'green', 'orange'];



	function changeBackground() {
		const rand = Colors[(Math.random() * Colors.length) | 0];
		setBackgroundColor(rand);
	}

	return (
		<div className='primary-card' style={{ background: backgroundColor }}>
			<h2>{name}</h2>
			<address>{phone}</address>
			<Button onClick={changeBackground} />
		</div >
	);
}
