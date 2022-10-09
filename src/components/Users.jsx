import '../App.css';
import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

return (
    <div id="img-wrapper">
        
       
        {users.map((user) => {
            return (
                <div>
                <li className="user-list" key={user.username}> 
                <img className="user-img" src={user.avatar_url} /> </li>
               
                <li className="user-list-text">{user.name}</li>
                </div>
                )
            })}
       
    </div>
);
};

export default Users;