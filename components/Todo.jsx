import React from "react";
import { Slide, toast } from "react-toastify";

const Todo = ({ id, title, description, mongoId, isCompleted, deleteTodo }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      {isCompleted ? (
        <td className="px-6 py-4">Done</td>
      ) : (
        <td className="px-6 py-4">Pending</td>
      )}
      <td className="px-6 py-4 flex items-start justify-start gap-2">
        <button
          onClick={() => {
            deleteTodo(mongoId);
            toast.info("Todo Deleted", {
              theme: "light",
              transition: Slide,
              autoClose: 1500,
              position: "top-center",
            });
          }}
          className="text-white bg-red-400 hover:bg-red-500 font-semibold px-4 py-2 rounded-md"
        >
          Delete
        </button>
        <button className="text-white bg-green-400 hover:bg-green-500 font-semibold px-4 py-2 rounded-md">
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo;
