import Community from "./Community";
import UserProfile from "./UserProfile";

interface Tag {
    id: number;
    name: string;
    isCommunityOnly: boolean;
    UserProfile?: UserProfile[];
    createdAt: Date;
    updatedAt: Date;
    Community?: Community;
    communityId?: number;
  }

  export default Tag;