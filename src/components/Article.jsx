import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticle } from '../utils/api';
import { increaseVote } from '../utils/api';
import { decreaseVote } from '../utils/api';

const Article = () => {
    const [article, setArticle] = useState({});
    const [votes, setVotes] = useState(0); 
    const [isLoading, setIsLoading] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const {article_id} = useParams();

    useEffect(() => {
        getArticle(article_id)
        .then(({article}) => {
            setArticle(article)
            setVotes(article.votes)
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [article_id]);

    if (isLoading) return <p className='loading'>Loading...</p>  

    const voteOnArticle = (article_id) => {
        setVotes((currVotes) => currVotes + 1)
        increaseVote(article_id)  
        };
    
    const removeVoteOnArticle = (article_id) => {
        setVotes((currVotes) => currVotes - 1)
        decreaseVote(article_id)
        };

    const handleClick = () => setIsDisabled(true);
    const plusVote = () => voteOnArticle(article.article_id);
    const minusVote = () => removeVoteOnArticle(article.article_id);


return (
    <section>
        <br></br><br></br>
        <ul className='ul'>
            <li>
            <h3>{article.title}</h3>
            <h4>By {article.author}</h4>
            <h5> Topic: {article.topic}</h5>
            <p>{article.body}</p>
            <h5> Comment count: {article.comment_count}</h5>
            <h5> Votes: {votes}</h5>
            
    <button 
        onClick={ plusVote() }>👍
    </button>  
   
    <button onClick={ minusVote() }>👎 </button>
            </li>   
        </ul>
    </section>
 
)}

export default Article;