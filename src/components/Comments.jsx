import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getComments } from '../utils/api';
import { Link } from 'react-router-dom';
import CommentAdder from './CommentAdder';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        getComments(article_id)
        .then(({ comments }) => {
            setComments(comments)
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
    })
}, [article_id]);

if (isLoading) return <p className='loading'>Loading...</p>

return (
    <section className="Comments">
        <br></br><br></br>
        
        <ul>
        <CommentAdder />

        {comments.map((comment) => {
            return (
               <li key={comment.article_id}>
                <h4>By {comment.author}</h4>
               <p><Link to={`/articles/article/${comment.article_id}`}>{comment.body}</Link></p>
               <p>{comment.created_at}</p>
               <br></br>
               </li>
                )
            })}
            
        </ul>
    </section>
);
};

export default Comments;