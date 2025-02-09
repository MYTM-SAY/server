import Community from './Community';
import Post from './Post';

interface Forum {
  id: number;
  title?: string;
  description?: string;
  communityId: number;
  community: Community;
  Post?: Post[];
  createdAt: Date;
  updatedAt: Date;
}
export default Forum;