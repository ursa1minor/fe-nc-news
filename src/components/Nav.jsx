import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <main>
        <ul className='Nav'>
        <li className="li"><Link to="/about">About</Link></li>
        <li className="li"><Link to="/users">Users</Link></li>
        <li className="li"><Link to="/articles">Articles</Link></li>
        <li className="li"> <Link to="/topics">Topics</Link></li>
        </ul>          
     </main>
    )
}
export default Nav;

