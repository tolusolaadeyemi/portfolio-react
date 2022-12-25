import './Stack.scss';
import node from '../../assets/logos/node.png';
import postman from '../../assets/logos/postman.png';
import docker from '../../assets/logos/docker.png';
import heroku from '../../assets/logos/heroku.png';
import mongodb from '../../assets/logos/mongodb.png';
import javascript from '../../assets/logos/javascript.png';
import python from '../../assets/logos/python.png';
import django from '../../assets/logos/django.png';

const Stack = () => {
	const images = [
		javascript,
		node,
		python,
		django,
		postman,
		mongodb,
		docker,
		heroku,
	];

	return (
		<div id="stack">
			<p className="header">i work with 🔨</p>
			<div className="images">
				{images.map((image, index) => (
					<img key={index} src={image} alt="technologies" />
				))}
			</div>
		</div>
	);
};

export default Stack;
