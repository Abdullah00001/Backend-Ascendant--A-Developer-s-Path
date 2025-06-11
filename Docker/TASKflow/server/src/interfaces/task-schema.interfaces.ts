import { Document, Types } from "mongoose";

interface TaskSchemaInterface extends Document {
  taskTitle: String;
  taskDescription: String;
  startAt: Date;
  endAt: Date;
  isComplete: Boolean;
  priority: Types.ObjectId;
  labels: Types.ObjectId[];
}

export default TaskSchemaInterface;
