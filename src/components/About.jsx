import '../App.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main>
        <br></br>
        <br></br>
        <p>Northcoders News is brought to you today by Northcoders!</p>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/">About</Link>
        <br></br>
        <br></br>
        <Link to="/articles/">Articles</Link>
        <br></br>
        <br></br>
        <Link to="/topics">Topics</Link>
        </main>
    );
  };

export default About;