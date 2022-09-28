import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <main>



      
        <ul className='Nav'>
        <li className="li"><Link to="/about">About</Link></li>
        <li className="li"><Link to="/articles">Articles</Link></li>
       <li className="li"> <Link to="/topics">Topics</Link></li>
            {/* <li className='li'>About</li>
            <li className='li'>Articles</li>
            <li className='li'>Topics</li>
            <li className='li'>Users</li> */}
        </ul>   
        
        
        </main>
    )
}
export default Nav;

