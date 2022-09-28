import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
    const [topics, setTopics] = useState([]);

useEffect(() => {
    axios
    .get('https://ursula-nc.herokuapp.com/api/topics')
    .then(({ data: { topics } }) => {
        setTopics(topics);
    })
    .catch(err => {
        console.log(err)
    })
}, []);

return (
    <main>
        <br></br><br></br>
        <ul className='Articles'>
        {topics.map((topic) => {
            return (
               <li key={topic.slug}>
               <h3>{topic.slug}</h3>
               <h4>By {topic.description}</h4>
               <br></br>
               </li>
                )
            })}
        </ul>
    </main>
);
};

export default Topics;