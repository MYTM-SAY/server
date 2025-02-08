import CommentVote from "./CommentVote";
import Community from "./Community";
import InstructorProfile from "./InstructorProfile";
import MemberRoles from "./MemberRoles";
import Post from "./Post";
import PostVote from "./PostVote";
import UserProfile from "./UserProfile";

interface User {
    id: number;
    fullname?: string;
    username: string;
    email: string;
    DateOfBirth?: Date;
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
    UserProfile?: UserProfile[];
    InstructorProfile?: InstructorProfile[];
    communities?: Community[];
    ownedCommunities?: Community[];
    MemberRoles?: MemberRoles[];
    Post?: Post[];
    Comment?: Comment[];
    PostVote?: PostVote[];
    CommentVote?: CommentVote[];
  }

  export default User;