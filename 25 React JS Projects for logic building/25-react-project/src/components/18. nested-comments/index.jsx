import { useState } from "react";
import Comment from "./Comment";

const NestedComments = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "This is first comment",
      children: [
        {
          id: 2,
          title: "This is child element one",
          children: [
            {
              id: 5,
              title: "This is a sub child of comment id 2",
              children: [],
            },
          ],
        },
        {
          id: 3,
          title: "This is child element two",
          children: [],
        },
        {
          id: 4,
          title: "This is child element three",
          children: [],
        },
      ],
    },
  ]);
  return (
    <div className="nested-comments-container">
      <h2>Nested Comments</h2>
      <div className="comment-wrapper">
        <textarea rows={"5"} cols={"100"} value={inputValue} />
        <br />
        <button>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default NestedComments;
