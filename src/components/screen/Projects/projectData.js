import jart from './project-images/Jart.PNG';
import jmc from './project-images/JMC.PNG';
import todo from './project-images/react-todo.PNG';
const projects = [
	{
		title: 'Jart',
		about:
			'Jart is a blog website for artists. Features include Authentication and Authurization (also with google oauth), full CRUD function with REST API.',
		img: jart,
		tools: [ 'MongoDB', 'Express.js', 'Node.js' ],
		preview: 'https://glacial-beyond-66136.herokuapp.com/',
		github: 'https://github.com/JamiuJimoh/Jart'
	},
	{
		title: 'JMC',
		about: "Search for your movies with JMC. All movies are fetched using IMDB API.",
		img: jmc,
		tools: [ 'Express.js', 'Semantic UI' ],
		preview: 'http://young-savannah-31158.herokuapp.com/',
		github: 'https://github.com/JamiuJimoh/movie-app'
	},
	{
		title: 'Todo',
		about: 'A simple todo list built with react. Create, delete and check your activities.',
		img: todo,
		tools: [ 'React.js', 'Css3', 'HTML5' ],
		preview: 'https://jamiutodoapp.netlify.app/',
		github: 'https://github.com/JamiuJimoh/todo-react-app'
	}
];

export default projects;
