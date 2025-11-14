import { Request, Response } from 'express';
import Task from '../models/task.model.js';

const taskCreateController = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(`TASK POST 201`);
  try {
    const { taskName, taskDescription, taskDue, status } = req.body;
    const newTask = new Task({
      taskName,
      taskDescription,
      taskDue,
      status,
    });
    const savedTask = await newTask.save();
    res.status(201).json({ message: 'Task Created', data: savedTask });
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'internal Server Error' });
      return;
    }
    res.status(500).json({ message: 'Unknown Error' });
    return;
  }
};

export default taskCreateController;
