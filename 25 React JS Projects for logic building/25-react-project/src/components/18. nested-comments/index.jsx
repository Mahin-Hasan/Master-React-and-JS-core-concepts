import { useState } from "react";
import Comment from "./Comment";
import "./nested-comments.css"

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

  function handleAddReply(getCurentParentId, getCurentReply) {
    // console.log(getCurentReply, getCurentParentId);
    let updatedComments = [...comments];
    handleAddNewComments(updatedComments, getCurentParentId, getCurentReply);
    setComments(updatedComments);
  }

  function newComment(text) {
    return {
      id: new Date().getTime(),
      title: text,
      children: [],
    };
  }

  function handleAddNewComments(
    updatedComments,
    getCurentParentId,
    getCurentReply
  ) {
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      if (comment.id === getCurentParentId) {
        comment.children.unshift(newComment(getCurentReply));
      }
    }
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      handleAddNewComments(comment.children, getCurentParentId, getCurentReply);
    }
  }

  // console.log(comments);
  return (
    <div className="nested-comments-container">
      <h2>Nested Comments</h2>
      <div className="comment-wrapper">
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          rows={"5"}
          cols={"100"}
          value={inputValue}
        />
        <br />
        <button
          onClick={() => {
            setComments([newComment(inputValue), ...comments]);
            setInputValue("");
          }}
          className="add-comment-btn"
        >
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((comment) => (
          <Comment
            handleAddReply={handleAddReply}
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </div>
  );
};

export default NestedComments;
