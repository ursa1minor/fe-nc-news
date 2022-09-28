import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../utils/api';


const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic} = useParams();

    useEffect(() => {
        getArticles(topic)
        .then(({ articles}) => {
            setArticles(articles)
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err)
    })
}, [topic]);

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