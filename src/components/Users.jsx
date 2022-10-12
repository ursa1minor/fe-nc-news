import '../App.css';
import { useEffect, useState, useContext } from 'react';
import { getUsers } from '../utils/api';
import { UserContext } from '../contexts/User';
import { Link } from 'react-router-dom';
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setLoggedInUser, loggedInUser } = useContext(UserContext);

useEffect(() => {
    getUsers()
    .then(({ users }) => {
        setUsers(users);
        setIsLoading(false);
    })
    .catch(err => {
        console.log(err)
    })
}, []);

if (isLoading) return <p className='loading'>Loading...</p>

if (!loggedInUser) {

return (
    <div id="img-wrapper">
        {users.map((user) => {
            return (
                <div>
                <li className="user-list" key={user.username}> 
                <img className="user-img" src={user.avatar_url} /> </li>
                <Link onClick={() => setLoggedInUser(user)}>
                <li className="user-list-text">{user.name}</li></Link>   
                          
                </div>
                
                )
            })}     
    </div>
    );
        } else {

            return (
                <div id="img-wrapper">
                    
                        
                            <div>
                            <li className="user-list" key={loggedInUser.username}> 
                            <img className="user-img" src={loggedInUser.avatar_url} /> </li>
                            
                            <li className="user-list-text">{loggedInUser.name}</li>   

                             {/* <User />             */}
                            </div>
                            
                         
                </div>
                );

        }
};

export default Users;