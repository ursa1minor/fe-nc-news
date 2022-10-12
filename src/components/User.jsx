import '../App.css';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';

const User = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        getArticles()
        .then(({ articles}) => {
            setArticles(articles)
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
    })
}, []);

if (isLoading) return <p className='loading'>Loading...</p>

return (
    <section>
        <br></br><br></br>
        <ul>
        {articles.map((article) => {
            return (
               <li key={article.article_id}>
               <h3><Link to={`/articles/article/${article.article_id}`}>{article.title}</Link></h3>
               <h4>By {article.author}</h4>
               <br></br>
               </li>
                )
            })}
        </ul>
    </section>
);
};

export default User;