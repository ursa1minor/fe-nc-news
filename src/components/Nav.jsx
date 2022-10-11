import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Nav = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    if (loggedInUser === null) {

return (
        <main>
        <ul className='Nav'>
        
        <li className="li"><Link to="/about">About</Link></li>
       
        <li className="li"><Link to="/articles">Articles</Link></li>
        
        <li className="li"> <Link to="/topics">Topics</Link></li>
        
        <li className="li"><Link to="/users">Log in</Link></li>     
        </ul>          
     </main>
    )

    } else {
        return (
            <main>
            <ul className='Nav'>
            
            <li className="li"><Link to="/about">About</Link></li>
           
            <li className="li"><Link to="/articles">Articles</Link></li>
            
            <li className="li"> <Link to="/topics">Topics</Link></li>
             
            <li className="logout"><a onClick={() => setLoggedInUser(null)}>Log out</a></li> 
         
            </ul> 

                     
         </main>
        )
    };
};
export default Nav;


