import '../App.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
        <br></br>
        <br></br>
        <p className='about'>Northcoders News is brought to you today by Northcoders!</p>
        <br></br>
        <br></br>
        <br></br>
        <Link className='about' to="/">About</Link>
        <br></br>
        <br></br>
        <Link className='about' to="/articles/">Articles</Link>
        <br></br>
        <br></br>
        <Link className='about' to="/topics">Topics</Link>
        </section>
    );
  };

export default About;