import { Document } from "mongoose";
import getAllPriorityRepository from "../repositories/get-all-priority.repositories.js";

const getAllPriorityService = async (): Promise<Document[]> => {
  try {
    return await getAllPriorityRepository();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown Error In Service");
    }
  }
};

export default getAllPriorityService;
