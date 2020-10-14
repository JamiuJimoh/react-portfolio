import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';
import projects from './projectData';

const Projects = () => {
	const renderList = () => {
		return projects.map((project) => {
			return (
				<div className="project__card" key={project.title}>
					<figure className="project__picture grown">
						<a href="/">
							<img src={project.img} alt="" />
						</a>
					</figure>
					<div className="about__project">
						<h1 className="title">{project.title}</h1>
						<section className="content">{project.about}</section>
						<section className="tools">
							{project.tools.map((tool) => {
								return <span>{tool}</span>;
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
					</div>
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
