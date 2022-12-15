import { useCallback, useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const { eventId } = props;
  const context = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch("/api/comments/" + eventId)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
        })
        .finally(() => setIsLoading(false));
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const resetIsSent = useCallback(function () {
    setIsSent(false);
  }, []);

  async function addCommentHandler(commentData) {
    try {
      context.showNotification({
        title: "Signing up...",
        message: "Registering for a comment.",
        status: "pending",
      });

      const res = await fetch("/api/comments/" + eventId, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong!");

      context.showNotification({
        title: "Success!",
        message: "Successfully registered for a comment.",
        status: "success",
      });

      setIsSent(true);
    } catch (err) {
      context.showNotification({
        title: "Error!",
        message: err.message || "Something went wrong!",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && (
        <NewComment
          onAddComment={addCommentHandler}
          isSent={isSent}
          onResetIsSent={resetIsSent}
        />
      )}
      {isLoading && <p>Loading...</p>}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
