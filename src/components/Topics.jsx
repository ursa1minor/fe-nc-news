import '../App.css';
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    getTopics()
    .then(({ topics }) => {
        setTopics(topics);
        setIsLoading(false);
    })
    .catch(err => {
        console.log(err)
    })
}, []);

if (isLoading) return <p className='loading'>Loading...</p>

return (
    <section>
        <br></br><br></br>
        <ul>
        {topics.map((topic) => {
            return (
               <li key={topic.slug}>
               <h3><Link to={`/articles/${topic.slug}`}>{topic.slug}</Link></h3>
               <h4>...{topic.description}</h4>
               <br></br>
               </li>
                )
            })}
        </ul>
    </section>
);
};

export default Topics;