import Community from './Community';
import Section from './Section';

interface Classroom {
  id: number;
  name?: string;
  description?: string;
  coverImg?: string;
  communityId?: number;
  community?: Community;
  createdAt: Date;
  updatedAt: Date;
  Section?: Section[];
}

export default Classroom;