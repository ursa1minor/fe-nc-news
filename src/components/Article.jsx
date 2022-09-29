import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticle } from '../utils/api';

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        getArticle(article_id)
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [article_id]);

    if (isLoading) return <p className='loading'>Loading...</p>   

return (
   
    <section>
        <br></br><br></br>
        <ul className='ul'>
            <li>
            <h3>{article.title}</h3>
            <h4>By {article.author}</h4>
            <p> Topic: {article.topic}</p>
            <p>{article.body}</p>
            <p> Comment count: {article.comment_count}</p>
            <p> Votes: {article.votes}</p>
            </li>           
        </ul>
    </section>
 
)}

export default Article;
