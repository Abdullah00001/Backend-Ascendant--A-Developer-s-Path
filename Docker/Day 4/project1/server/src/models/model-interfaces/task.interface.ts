import { Document } from 'mongoose';

const enum TaskStatus {
  pending = 'PENDING',
  complete = 'COMPLETE',
}

interface TaskInterface extends Document {
  taskName: string;
  taskDescription: string;
  taskDue: Date;
  status: TaskStatus;
}

export default TaskInterface;
