import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticle } from '../utils/api';
import { increaseVote } from '../utils/api';
import { decreaseVote } from '../utils/api';
import Comments from './Comments';

const Article = () => {

    const [article, setArticle] = useState({});
    const [votes, setVotes] = useState(0); 
    const [isLoading, setIsLoading] = useState(true);
    const [hasUpVoted, setHasUpVoted] = useState(false);
    const [hasDownVoted, setHasDownVoted] = useState(false); 
    
    const {article_id} = useParams();

    const upVote = (article_id) => {

        if (!hasUpVoted) {
            increaseVote(article_id)
            setVotes((currVotes) =>
            currVotes + 1)

            setHasUpVoted(true)
        } 
    }

    const downVote = (article_id) => {
        if (!hasDownVoted) {
            decreaseVote(article_id)
            setVotes((currVotes) =>
            currVotes - 1)

            setHasDownVoted(true)
        }
    }

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

    const displayDate = (string) => {
        const date = new Date(string.slice(0, -1));
        return date.toDateString();
      };

    return (

        <section className="Article">
            
        <br></br><br></br>
    
        <h3>{article.title}</h3>
        <p>{displayDate(article.created_at)}</p>
        <h4>By {article.author}</h4>
        
        <h5> Topic: {article.topic}</h5>
        <p>{article.body}</p>
        
    
        <button onClick={() => upVote(article.article_id)}>👍</button>  
        <button onClick={() => downVote(article.article_id)}>👎 </button> 
        <h5>Votes: {votes}   {''} &nbsp; {''}   Comment count: {article.comment_count}</h5>

        <Comments />
    
        </section> )      
}

export default Article;