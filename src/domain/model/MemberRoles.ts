import Role from '../enum/Roles';
import Community from './Community';
import User from './User';

interface MemberRoles {
  communityId: number;
  userId: number;
  role: Role;
  community: Community;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}
export default MemberRoles;