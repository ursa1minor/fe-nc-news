import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { postComment } from '../utils/api'

const CommentAdder = () => {

    const [newComment, setNewComment] = useState('');
    
    const {article_id} = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        const body = {username: "jessjelly", body: newComment}

        postComment(article_id, body).then(() => {
            setNewComment('');
        })
        
    };
        
return (
    <section className="CommentAdder">
        <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="newComment.body">Add a comment</label>
     
        <textarea  
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}></textarea>
       
        <br></br><br></br>
        <button>Add Comment</button>

        </form>

    </section>
)
};

export default CommentAdder;