import { Tag } from "swagger-jsdoc";
import User from "./User";

  
  interface UserProfile {
    id: number;
    userId?: number;
    profilePicture?: string;
    bio?: string;
    twitter?: string;
    facebook?: string;
    Instagram?: string;
    linkedin?: string;
    youtube?: string;
    tags?: Tag[];
    user?: User;
  }

  export default UserProfile