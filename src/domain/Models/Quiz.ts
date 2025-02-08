import Question from "./Question";

interface Quiz {
    id: number;
    name?: string;
    questions?: Question[];
    duration: number;
    active: boolean;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  export default Quiz;