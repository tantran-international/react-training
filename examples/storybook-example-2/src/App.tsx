import { useState } from 'react';
import { Button } from './components/buttons';
import './App.css'

export default function App() {
	const [show, setShow] = useState(false);

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<Button style={{ background: show ? "red" : "none" }} onClick={() => { setShow(!show); }} buttonText='Show / Hide' />
			{show ? <h2>Surprise!!!</h2> : null}
		</div>
	);
}
