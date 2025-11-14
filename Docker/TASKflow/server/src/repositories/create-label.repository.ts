import { Document } from "mongoose";
import LabelSchemaInterface from "../interfaces/label-schema.interfaces.js";
import Label from "../models/label.models.js";

const createLabelRepository = async (
  data: LabelSchemaInterface
): Promise<Document> => {
  try {
    const newLabel = new Label(data);
    return await newLabel.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("New Label Creation Failed Due To Unknown Error");
    }
  }
};

export default createLabelRepository;
