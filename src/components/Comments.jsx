import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments, postComment } from "../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [newCommentBody, setNewCommentBody] = useState("");
  const [newComment, setNewComment] = useState({});
  const [commentPosted, setCommentPosted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [newComment]);

  if (isLoading) return <p className="loading">Loading...</p>;

  const displayDate = (string) => {
    const date = new Date(string.slice(0, -1));
    return date.toDateString();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { username: "jessjelly", body: newCommentBody };
    postComment(article_id, body)
    .then(( postedComment ) => {
        setCommentPosted(true);
        setNewComment(postedComment)
    })
    setNewCommentBody("");
  };

  return (
    <section className="Comments">

      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="comment.body">Add a comment:</label>
        <br></br>
        <textarea
          value={newCommentBody}
          onChange={(event) => setNewCommentBody(event.target.value)}
        ></textarea>
        <br></br>
        <br></br>
        <button>Add Comment</button>
      </form>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.article_id}>
              <h4>By {comment.author}</h4>
              <p>{comment.body}</p>
              <p>{displayDate(comment.created_at)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
