import { Document } from "mongoose";
import getAllTaskRepositories from "../repositories/get-all-task.repositories.js";

const getAllTaskService = async (): Promise<Document[]> => {
  try {
    return await getAllTaskRepositories();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown Error In Service");
    }
  }
};

export default getAllTaskService;
