import "../CommentsForm/CommentsForm.scss";

function CommentsForm() {
  return (
    <div className="comment-form">
      <div className="comment">
        <div className="comment__avitar"></div>
        <form className="comment__form">
          <label htmlFor="comment" className="comment__header">
            Join The Conversation
            <input
              type="text"
              className="comment__input"
              id="comment"
              name="comment"
            ></input>
          </label>
          <button className="comment__btn">COMMENT</button>
        </form>
      </div>
    </div>
  );
}

export default CommentsForm;
