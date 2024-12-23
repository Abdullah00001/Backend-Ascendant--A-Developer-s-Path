import { model, Model, Schema } from "mongoose";
import TaskSchemaInterface from "../interfaces/task-schema.interfaces.js";

const TaskSchema = new Schema<TaskSchemaInterface>(
  {
    taskTitle: { type: String, required: true },
    taskDescription: { type: String, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    priority: { type: Schema.Types.ObjectId, ref: "Priority" },
    labels: [{ type: Schema.Types.ObjectId, ref: "Label" }],
    isComplete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Task: Model<TaskSchemaInterface> = model<TaskSchemaInterface>(
  "Task",
  TaskSchema
);

export default Task;

