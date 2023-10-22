// Challenge 3: When the feedback is submitted, it’s supposed to display a thank-you message.
// However, it crashes with an error message saying “Rendered fewer hooks than expected”. Can you spot the mistake and fix it?
import { useState } from 'react'
import './App.css'

export default function FeedbackForm() {
	const [isSent, setIsSent] = useState(false);
	const [message, setMessage] = useState<string>("");
	if (isSent) {
		return <h1>Thank you!</h1>;
	} else {
		// eslint-disable-next-line
		return (
			<form
				onSubmit={(e: React.FormEvent) => {
					e.preventDefault();
					alert(`Sending: "${message}"`);
					setIsSent(!isSent);
				}}
			>
				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<br />
				<button type="submit">Send</button>
			</form>
		);
	}
}
