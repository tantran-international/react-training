// State: A Component's Memory: Challenge 1 - Complete the gallery
import { useState } from 'react';
import { sculptureList } from './data';
import './App.css'

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	const hasPrev = index > 0;
	const hasNext = index < sculptureList.length - 1;

	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1);
		}
	}

	function handlePreviousClick() {
		if (hasPrev) {
			setIndex(index - 1);
		}
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	const sculpture = sculptureList[index];
	return (
		<>
			<button onClick={handlePreviousClick}>Previous</button>
			<button onClick={handleNextClick}>Next</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? "Hide" : "Show"} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<img src={sculpture.url} alt={sculpture.alt} />
		</>
	);
}
