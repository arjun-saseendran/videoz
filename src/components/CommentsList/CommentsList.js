import { Comment } from "../Comment/Comment";

export const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5">
        {comment.replies.length > 0 && (
          <CommentsList comments={comment?.replies} />
        )}
      </div>
    </div>
  ));
};
