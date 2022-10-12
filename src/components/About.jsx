import '../App.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
        <br></br>
        <br></br>
        <strong><p className='about'>Northcoders News is brought to you today by Ursula Ackah in collaboration with Northcoders!</p></strong>
        <br></br>
        <p className='about'>- <Link to="/users">Log in</Link> as one of six users</p>
        <p className='about'>- View articles on the <Link to="/articles">Articles</Link> page</p>
        <p className='about'>- View articles by topic via the <Link to="/topics">Topics</Link> page</p>
        <p className='about'>- Vote for articles</p>
        <p className='about'>- Add and delete comments</p>
       
        </section>
    );
  };

export default About;