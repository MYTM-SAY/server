import Material from "./Material";
import Section from "./Section";

interface Lesson {
    id: number;
    name?: string;
    notes?: string[];
    materialId: number;
    material: Material;
    sectionId?: number;
    section?: Section;
    createdAt: Date;
    updatedAt: Date;
  }

  export default Lesson;