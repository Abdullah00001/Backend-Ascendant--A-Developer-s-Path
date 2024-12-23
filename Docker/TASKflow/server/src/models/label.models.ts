import { model, Model, Schema } from "mongoose";
import LabelSchemaInterface from "../interfaces/label-schema.interfaces.js";

const LabelSchema = new Schema<LabelSchemaInterface>(
  {
    name: { type: String, required: true },
    color: { type: String },
  },
  { timestamps: true }
);

const Label: Model<LabelSchemaInterface> = model<LabelSchemaInterface>(
  "Label",
  LabelSchema
);

export default Label;
