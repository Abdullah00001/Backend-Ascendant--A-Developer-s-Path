import { Document, model, Model, Schema } from "mongoose";

export interface ITodo extends Document {
  todoTitle: string;
  todoDescription: string;
  isComplete: boolean;
}

const TodoSchema = new Schema<ITodo>(
  {
    todoTitle: { type: String, required: true },
    todoDescription: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Todo: Model<ITodo> = model<ITodo>("Todo", TodoSchema);