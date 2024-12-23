import { Document } from "mongoose";
import getAllLabelsRepository from "../repositories/get-all-label.repositories.js";

const getAllLabelsServices = async (): Promise<Document[]> => {
  try {
    return await getAllLabelsRepository();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown Error Occurred In Service");
    }
  }
};

export default getAllLabelsServices;
