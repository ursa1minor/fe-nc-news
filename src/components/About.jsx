import '../App.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
        <br></br>
        <br></br>
        <p className='about'>Northcoders News is brought to you today by Ursula Ackah in collaboration with Northcoders!</p>
        <br></br>
        <p className='about'>- View users on the <Link to="/users">Users</Link> page</p>
        <p className='about'>- View articles on the <Link to="/articles">Articles</Link> page</p>
        <p className='about'>- View articles by topic via the <Link to="/topics">Topics</Link> page</p>
        <p className='about'>- Vote for articles</p>
        <p className='about'>- Add and delete comments</p>
       
        </section>
    );
  };

export default About;