import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const todoModel =
  mongoose.models.todo || mongoose.model("todo", todoSchema);
