import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/", {
      dbName: "NextjsTodoList",
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log({ message: err.message }));
};
