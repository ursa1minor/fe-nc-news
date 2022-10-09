import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { postComment } from '../utils/api'

const CommentAdder = () => {

    const [newComment, setNewComment] = useState('');
    const [commentPosted, setCommentPosted] = useState(false);
    
    const {article_id} = useParams();

    const handleSubmit = (event) => {
        //event.preventDefault();
            const body = {username: "jessjelly", body: newComment}
        postComment(article_id, body)
        .then(( ) => {
            setCommentPosted(true);
            console.log('hi')
            
        })      
        setNewComment('');  
    };

        
return (

    <section className="CommentAdder">
        
        <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="comment.body">Add a comment:</label>
     <br></br>
        <textarea  
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}></textarea>
        <br></br><br></br>
        <button>Add Comment</button>

        </form>
    </section>
    )
};

export default CommentAdder;