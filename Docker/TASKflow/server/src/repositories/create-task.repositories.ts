import { Document } from "mongoose";
import TaskSchemaInterface from "../interfaces/task-schema.interfaces.js";
import Task from "../models/task.model.js";

const createTaskRepository = async (
  data: TaskSchemaInterface
): Promise<Document> => {
  try {
    const newTask = new Task(data);
    return await newTask.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("New Task Creation Failed Due To Unknown Error");
    }
  }
};

export default createTaskRepository;
