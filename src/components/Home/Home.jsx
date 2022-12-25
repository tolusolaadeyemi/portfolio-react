import './Home.scss';
import { useState, useRef } from 'react';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import { FaChevronDown} from 'react-icons/fa';
import hero1 from '../../assets/faces/hero1.png';
import hero2 from '../../assets/faces/hero2.png';
import hero3 from '../../assets/faces/hero3.png';

const Home = () => {
	const indexRef = useRef(1);
	const [faceIndex, setFaceIndex] = useState(1);

	const updateFace = () => {
		indexRef.current === 4 ? (indexRef.current = 1) : (indexRef.current = indexRef.current + 1);
		setFaceIndex(indexRef.current);
	};

	const pickFace = () => {
		switch (faceIndex) {
			case 1:
				return hero1;
			case 2:
				return hero2;
			case 3:
				return hero3;
			default:
				return hero1;
		}
	};

	const scrollDown = () => {
		const scrollTo = document.querySelector('#stack')
		scrollTo.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
	};

	return (
		<div id="home">
			<div className="container">
				<img src={pickFace()} alt="tolu memoji" onClick={updateFace} />
				<div className="intro">
					<p className="mainText"> hi 👋🏾, i'm</p>
					<p className="myName">tolu sola-adeyemi</p>
					<p className="titText">currently <strong>doing:</strong></p>
						<p className="subText"> 
							backend engineering at flutterwave 🦋 
						</p>
						<p className="titText">currently <strong>learning:</strong></p>
						<p className="subText"> 
							advanced node.js concepts, ds and algos, rust 
						</p>
						<p className="titText">currently <strong>being:</strong></p>
						<p className="subText">
							apart from programming, i also enjoy boxing, listening to music 🎧, watching netflix and hanging out with friends 🌟. 
						</p>

					<div className="socialIcons">
						<a href="http://www.github.com/tolusolaadeyemi" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
						<a href="http://www.twitter.com/tolusolaadeyemi" target="_blank" rel="noopener noreferrer">
							<SiTwitter />
						</a>
						<a
							href="https://www.linkedin.com/in/toluwanimi-sola-adeyemi/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiLinkedin />
						</a>
					</div>

					<div className="scrollDown">
						<FaChevronDown onClick={() => scrollDown()} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
