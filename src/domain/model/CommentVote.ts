import User from "./User";

interface CommentVote {
    type: boolean;
    userId: number;
    commentId: number;
    comment: Comment;
    user: User;
  }

  export default CommentVote;