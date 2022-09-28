import axios from 'axios';
import { useEffect, useState, useParams } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    axios
    .get('https://ursula-nc.herokuapp.com/api/articles')
    .then(({ data: { articles } }) => {
        setArticles(articles);
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
        {articles.map((article) => {
            return (
               <li key={article.article_id}>
               <h3>{article.title}</h3>
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