// Create Image component
function Image() {
	// Using JSX with curly braces
	const source = 'https://cafebiz.cafebizcdn.vn/2019/1/18/photo-1-154777686469242085471.jpeg';
	const description = 'Bill-Gate-image';
	return (
		<img src={source} alt={description} />
	);
}

// Export Profile component as named export
export function Profile() {
	return (
		<>
			<h1>Hello Tan Tran - I'm Richest man in the world!</h1>
			<Image />
		</>
	);
}
