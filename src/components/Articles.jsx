import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);
    const {topic} = useParams();

    useEffect(() => {
        getArticles(topic)
        .then(({ articles}) => {
            setArticles(articles)
            //setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
    })
}, [topic]);

//if (isLoading) return <p className='loading'>Loading...</p>

return (
    <section>
        <br></br><br></br>
        <ul>
        {articles.map((article) => {
            return (
               <li key={article.article_id}>
               <h3><Link to={`/articles/article/${article.article_id}`}>{article.title}</Link></h3>
               <h4>By {article.author}</h4>
               <p> Topic: {article.topic}</p>
               <br></br>
               </li>
                )
            })}
        </ul>
    </section>
);
};

export default Articles;