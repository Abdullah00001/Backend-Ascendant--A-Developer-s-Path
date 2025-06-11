jest.mock("mongoose", () => ({
  connect: jest.fn(),
}));
import mongoose from "mongoose";
import connectDb from "../../src/configs/db.config";

describe("connectDb", () => {
  test("should connect to the database successfully", async () => {
    // Mock successful connection
    (mongoose.connect as jest.Mock).mockResolvedValueOnce(undefined);

    await expect(connectDb()).resolves.not.toThrow();
  });

  test("should throw an error if connection fails", async () => {
    // Mock failed connection
    (mongoose.connect as jest.Mock).mockRejectedValueOnce(
      new Error("Database Connection Failed")
    );

    await expect(connectDb()).rejects.toThrow("Database Connection Failed");
  });
});
