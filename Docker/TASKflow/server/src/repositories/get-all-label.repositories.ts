import { Document } from "mongoose";
import Label from "../models/label.models.js";

const getAllLabelsRepository = async (): Promise<Document[]> => {
  try {
    return await Label.find({});
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Operation Failed Due To Unknown Error");
    }
  }
};

export default getAllLabelsRepository;
