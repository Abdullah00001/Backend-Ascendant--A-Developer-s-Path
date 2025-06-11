import { Document } from "mongoose";

interface LabelSchemaInterface extends Document {
  name: string;
  color: string;
}

export default LabelSchemaInterface