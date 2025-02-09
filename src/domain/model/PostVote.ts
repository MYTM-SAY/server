import Post from './Post';
import User from './User';

interface PostVote {
  type: boolean;
  userId: number;
  postId: number;
  post: Post;
  user: User;
}
export default PostVote;