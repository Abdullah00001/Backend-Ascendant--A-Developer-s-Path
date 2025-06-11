import { model, Model, Schema } from "mongoose";
import PrioritySchemaInterface from "../interfaces/priority-schema.interfaces.js";

const PrioritySchema = new Schema<PrioritySchemaInterface>(
  {
    name: { type: String },
    level: { type: Number, required: true },
  },
  { timestamps: true }
);

const Priority: Model<PrioritySchemaInterface> = model<PrioritySchemaInterface>(
  "Priority",
  PrioritySchema
);

export { Priority };
