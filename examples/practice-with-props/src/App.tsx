import './App.css'

type ProfileTypes = {
	imageId: string,
	name: string,
	profession: string,
	awards: string[],
	discovery: string,
	imageSize: number
}

type CardChild = {
	children: JSX.Element
}

function Card({ children }: CardChild) {
	return (
		<>
			<section className="profile">
				{children}
			</section>
		</>
	);
}

function Profile({ imageId, name, profession, awards, discovery, imageSize }: ProfileTypes) {
	return (
		<>
			<h2>{name}</h2>
			<img
				className="avatar"
				src={imageId}
				alt={name}
				width={imageSize}
				height={imageSize}
			/>
			<ul>
				<li>
					<b>Profession: </b>
					{profession}
				</li>
				<li>
					<b>Awards: {awards.length} </b>
					({awards.join(' -/- ')})
				</li>
				<li>
					<b>Discovered: </b>
					{discovery}
				</li>
			</ul>
		</>
	);
}

export default function Gallery() {
	return (
		<div>
			<h1>Notable Scientists</h1>
			<Card>
				<Profile
					imageId='https://cafefcdn.com/2019/7/5/photo-1-15622920117161385854940.jpg'
					name='Maria Skłodowska-Curie'
					profession='physicist and chemist'
					awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
					discovery='polonium (chemical element)'
					imageSize={200}
				/>
			</Card>
			<Card>
				<Profile
					imageId='https://tcct.aicmscdn.net/tcct-media/20/3/20/marilyn-monroe604.jpg'
					name='Katsuko Saruhashi'
					profession='geochemist'
					awards={[
						'Miyake Prize for geochemistry',
						'Tanaka Prize'
					]}
					discovery="a method for measuring carbon dioxide in seawater"
					imageSize={200}
				/>
			</Card>
		</div>
	)
}
