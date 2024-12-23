import { Document } from "mongoose";
import LabelSchemaInterface from "../interfaces/label-schema.interfaces.js";
import createLabelRepository from "../repositories/create-label.repository.js";

const createLabelService = async (
  data: LabelSchemaInterface
): Promise<Document> => {
  try {
    return await createLabelRepository(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown Error Occurred In Service");
    }
  }
};

export default createLabelService;
