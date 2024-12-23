import { Document } from "mongoose";
import PrioritySchemaInterface from "../interfaces/priority-schema.interfaces.js";
import createPriorityRepository from "../repositories/create-priority.repositories.js";

const createPriorityService = async (
  data: PrioritySchemaInterface
): Promise<Document> => {
  try {
    return await createPriorityRepository(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown Error In Service Phase");
    }
  }
};

export default createPriorityService;
