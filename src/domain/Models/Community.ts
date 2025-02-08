import Classroom from "./Classroom";
import Forum from "./Forum";
import MemberRoles from "./MemberRoles";
import Tag from "./Tag";
import User from "./User";

interface Community {
    id: number;
    name?: string;
    description?: string;
    converImg?: string;
    logoImg?: string;
    ownerId: number;
    owner: User;
    members?: User[];
    MemberRoles?: MemberRoles[];
    Forum?: Forum[];
    classrooms?: Classroom[];
    tags?: Tag[];
    createdAt: Date;
    updatedAt: Date;
  }

  export default Community;