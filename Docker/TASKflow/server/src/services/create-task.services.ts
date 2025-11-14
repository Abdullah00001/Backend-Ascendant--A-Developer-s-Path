import { Document } from "mongoose";
import TaskSchemaInterface from "../interfaces/task-schema.interfaces.js";
import createTaskRepository from "../repositories/create-task.repositories.js";

const createTaskService = async (
  data: TaskSchemaInterface
): Promise<Document> => {
  try {
    return await createTaskRepository(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown Error In Service Phase");
    }
  }
};

export default createTaskService;
