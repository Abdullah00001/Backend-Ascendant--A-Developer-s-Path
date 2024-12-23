import { Document } from "mongoose";
import { Priority } from "../models/priority.models.js";
import PrioritySchemaInterface from "../interfaces/priority-schema.interfaces.js";

const createPriorityRepository = async (
  data: PrioritySchemaInterface
): Promise<Document> => {
  try {
    const newPriority = new Priority(data);
    return await newPriority.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("New Priority Creation Failed Due To Unknown Error");
    }
  }
};

export default createPriorityRepository;
