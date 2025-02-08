import User from "./User";

interface InstructorProfile {
    id: number;
    userId?: number;
    education?: string;
    experience?: string;
    certificates?: string[];
    user?: User;
  }

export default InstructorProfile;