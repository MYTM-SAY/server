import Forum from './Forum';
import PostVote from './PostVote';
import User from './User';

interface Post {
  id: number;
  title?: string;
  content?: string;
  attchment?: string[];
  forumId: number;
  forum: Forum;
  authorId: number;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  Comment?: Comment[];
  PostVote?: PostVote[];
}
export default Post;