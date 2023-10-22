import { useState } from 'react'
import './App.css'

export default function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFirstName(e.target.value);
		// firstName = firstName;
	}

	function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLastName(e.target.value);
		// lastName = lastName;
	}

	function handleReset() {
		setFirstName("");
		setLastName("");
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				placeholder="First name"
				value={firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				placeholder="Last name"
				value={lastName}
				onChange={handleLastNameChange}
			/>
			<h1>
				Hi, {firstName} {lastName}
			</h1>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}
