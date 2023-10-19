// In this example, each Item receives a numerical importance prop. Use the && operator to render ”(Importance: X)” in italics,
// but only for items that have non-zero importance. Your item list should end up looking like this:
// Space suit (Importance: 9)
// Helmet with a golden leaf
// Photo of Tam (Importance: 6)
// Don’t forget to add a space between the two labels!

import './App.css'

type PropsType = {
	name: string;
	importance: number;
}

function Item({ name, importance }: PropsType) {
	return (
		<li className="item">
			{name}
			{importance > 0 && <i> (Importance: {importance})</i>}
		</li>
	);
}

export default function PackingList() {
	return (
		<section>
			<h1>Sally Ride's Packing List</h1>
			<ul>
				<Item importance={9} name="Space suit" />
				<Item importance={0} name="Helmet with a golden leaf" />
				<Item importance={6} name="Photo of Tam" />
			</ul>
		</section>
	);
}
