import axios from 'axios';
import { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);

useEffect(() => {
    axios
    .get('https://ursula-nc.herokuapp.com/api/articles')
    .then(({ data: { articles } }) => {
        setArticles(articles);
    })
    .catch(err => {
        console.log(err)
    })
}, []);

console.log(articles, '<- articles')

return (
    <main>
        <ul className='Articles'>
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
    </main>
);
};

export default Articles;