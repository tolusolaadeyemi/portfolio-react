import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import './Work.scss';

const Work = () => {
	return (
		<div id="work">
			<p className="introTxt">sum of my projects 🍓</p>
			<div className="projects">
				<div className="project">
					<a href="https://tolu-book-management.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						library-management-app
					</a>
					<p className="projectTool">python, django, postgresql, heroku </p>
					<p className="projectInfo">
					a fullstack library management app that allows users to comment on/rate books borrowed. users can also view other people's comments/ratings.
					</p>
					<div className="projectIcons">
						<a href="https://tolu-book-management.herokuapp.com/" target="_blank" rel="noopener noreferrer">
							<BiLinkExternal />
						</a>
						<a
							href="https://github.com/tolusolaadeyemi/book_management_system"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://github.com/tolusolaadeyemi/node-store-api" target="_blank" rel="noopener noreferrer">
						stack-overflow-lite
					</a>
					<p className="projectTool">node.js, express, mysql, sequelize, mocha/chai</p>
					<p className="projectInfo">
					stackoverflow_lite is a platform where users can ask and answer questions as well as vote on most relevant/useful answers.
					</p>
					<div className="projectIcons">
					<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLinkExternal />
						</a>
						<a href="https://github.com/toluflw/stackoverflow_lite" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
					</div>
				</div>
			</div>
			<p className="otherProject">
				you can also find some other projects{' '}
				<a href="https://github.com/tolusolaadeyemi?tab=repositories" target="_blank" rel="noopener noreferrer">
					here
				</a>
			</p>
		</div>
	);
};

export default Work;
