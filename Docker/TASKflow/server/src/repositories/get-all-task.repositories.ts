import { Document } from "mongoose";
import Task from "../models/task.model.js";

const getAllTaskRepositories = async (): Promise<Document[]> => {
  try {
    return await Task.find({}).populate("priority").populate("labels");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Tasks Retrieve Failed Due To Unknown Error");
    }
  }
};

export default getAllTaskRepositories;
