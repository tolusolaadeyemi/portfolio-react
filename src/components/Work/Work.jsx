import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import './Work.scss';

const Work = () => {
	return (
		<div id="work">
			<p className="introTxt">Selected Projects</p>
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
					<a href="https://github.com/tolusolaadeyemi/node-task-api" target="_blank" rel="noopener noreferrer">
						node-task-api
					</a>
					<p className="projectTool">node.js, express, mongodb, react</p>
					<p className="projectInfo">
					simple node.js task management api (to-do list) that performs all CRUD operations.
					</p>
					<div className="projectIcons">
						<a href="https://github.com/tolusolaadeyemi/node-task-api" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://flw-tpss-tolusolaadeyemi.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						transaction-payment-splitting-service-api
					</a>
					<p className="projectTool">node.js, express, heroku</p>
					<p className="projectInfo">a node.js api for lannisterpay (a fictional transaction payment splitting service)</p>
					<div className="projectIcons">
						<a
							href="https://flw-tpss-tolusolaadeyemi.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLinkExternal />
						</a>
						<a
							href="https://github.com/tolusolaadeyemi/flw-tpss-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
					</div>
				</div>

				<div className="project">
					<a href="https://github.com/tolusolaadeyemi/node-store-api" target="_blank" rel="noopener noreferrer">
						node-store-api
					</a>
					<p className="projectTool">node.js, express, mongodb</p>
					<p className="projectInfo">
					simple node.js furniture store-api to practice searching, sorting and filtering through certain products by name, rating, company and price
					</p>
					<div className="projectIcons">
					<a
							href="https://tolu-store-api.herokuapp.com/api/v1/products"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLinkExternal />
						</a>
						<a href="https://github.com/tolusolaadeyemi/node-store-api" target="_blank" rel="noopener noreferrer">
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
