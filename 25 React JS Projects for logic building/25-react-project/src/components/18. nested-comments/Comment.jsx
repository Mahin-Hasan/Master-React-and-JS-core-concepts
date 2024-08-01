import { useState } from "react";

const Comment = ({ comment, key }) => {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);

  return (
    <li key={key}>
      {comment.title}
      {!showReplyCommentBox ? (
        <button onClick={() => setShowReplyCommentBox(true)}>Add Reply</button>
      ) : null}
      {showReplyCommentBox ? (
        <div>
          <textarea
            rows={"2"}
            cols={"20"}
            onChange={(e) => setReply(e.target.valuel)}
            value={reply}
          />
          <br />
          <div className="reply-buttons-container">
            <button>Submit</button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {comment && comment.children && comment.children.length > 0 ? (
        <ul>
          {comment.children.map((childComment) => (
            <Comment key={childComment.id} comment={childComment} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default Comment;
