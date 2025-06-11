import { model, Model, Schema } from 'mongoose';
import TaskInterface from './model-interfaces/task.interface.js';

const TaskSchema = new Schema<TaskInterface>(
  {
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    taskDue: { type: Date, required: true },
    status: { type: String },
  },
  { timestamps: true }
);

const Task: Model<TaskInterface> = model<TaskInterface>('Task', TaskSchema);

export default Task;
