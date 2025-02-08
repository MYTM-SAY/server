import Quiz from "./Quiz";
import Section from "./Section";

interface Question {
    id: number;
    text?: string;
    options?: string[];
    answers?: string[];
    sectionId?: number;
    section?: Section;
    createdAt: Date;
    updatedAt: Date;
    Quiz?: Quiz;
    quizId?: number;
  }

  export default Question;