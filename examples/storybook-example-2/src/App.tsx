
import './App.css'
import { Card } from './components/cards/card';

export default function App() {


	// function changeBackgroundColor() {


	// 	setBackground(rand);
	// }

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<Card
				name='TranVanA'
				phone='321654987654'
			// backgroundColor={background}
			// changeBackground={changeBackgroundColor}
			/>
		</div>
	);
}
