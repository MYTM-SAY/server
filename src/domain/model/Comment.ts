import CommentVote from "./CommentVote";
import Post from "./Post";
import User from "./User";

interface Comment {
    id: number;
    content?: string;
    parentId?: number;
    parent?: Comment;
    children?: Comment[];
    postId: number;
    post: Post;
    authorId: number;
    author: User;
    createdAt: Date;
    updatedAt: Date;
    CommentVote?: CommentVote[];
  }

  export default Comment;