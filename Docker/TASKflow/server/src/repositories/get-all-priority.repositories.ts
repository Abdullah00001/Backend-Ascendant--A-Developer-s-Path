import { Document } from "mongoose";
import { Priority } from "../models/priority.models.js";

const getAllPriorityRepository = async (): Promise<Document[]> => {
  try {
    const getAll = await Priority.find({});
    return getAll;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Operation Failed Due To Unknown Error");
    }
  }
};

export default getAllPriorityRepository;
