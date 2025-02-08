import MaterialType from "../Enums/MaterialType";
import Lesson from "./Lesson";

interface Material {
    id: number;
    materialType: MaterialType;
    fileUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    Lesson?: Lesson[];
  }
export default Material;