import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';
import projects from './projectData';

const Projects = (props) => {
	const renderList = () => {
		return projects.map((project) => {
			return (
				<div id="projects" className="project__card" key={project.title}>
					<figure className="project__picture grow">
						<a href={project.preview}>
							<img src={project.img} alt={project.about} />
						</a>
					</figure>
					<main data-aos={props.data} className="about__project">
						<h1 className="title">{project.title}</h1>
						<section className="content">{project.about}</section>
						<section className="tools">
							{project.tools.map((tool) => {
								return <span key={tool}>{tool}</span>;
							})}
						</section>
						<div className="icons">
							<a href={project.github}>
								<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
							</a>
							<a href={project.preview}>
								<FontAwesomeIcon icon="external-link-alt" />
							</a>
						</div>
					</main>
				</div>
			);
		});
	};

	return (
		<div className="projects">
			<h1>RECENTLY DONE PROJECTS</h1>
			{renderList()}
		</div>
	);
};

export default Projects;
