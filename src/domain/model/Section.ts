import Classroom from './Classroom';
import Lesson from './Lesson';
import Question from './Question';

interface Section {
  id: number;
  name?: string;
  description?: string;
  classroomId?: number;
  classroom?: Classroom;
  createdAt: Date;
  updatedAt: Date;
  Lesson?: Lesson[];
  Question?: Question[];
}

export default Section;