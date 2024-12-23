import { Document } from "mongoose";

interface PrioritySchemaInterface extends Document {
  name: string;
  level: number;
}

export default PrioritySchemaInterface;
