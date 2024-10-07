"use client";
import Todo from "@/components/Todo";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async () => {
    try {
      const res = await axios.post("/api", formData);

      toast.success("Todo Added", {
        autoClose: 1500,
        transition: Slide,
        theme: "light",
        position: "top-center",
      });
      console.log(res.data);
      getTodos();
    } catch (error) {}
  };
  const deleteTodo = async (id) => {
    const res = await axios.delete("/api", {
      params: {
        id: id,
      },
    });
    getTodos();
  };

  const [todoList, setTodoList] = useState([]);
  const getTodos = async () => {
    const res = await axios.get("/api");

    setTodoList(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <main className="flex items-center justify-center flex-col w-screen">
      <ToastContainer />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.description !== "") {
            submitHandler();
            setFormData({
              title: "",
              description: "",
            });
            getTodos();
          } else {
            toast.error("Please Fill Details", {
              theme: "light",
              transition: Slide,
              position: "top-center",
              autoClose: 1500,
            });
          }
        }}
        className="rounded-lg w-full p-10 mt-10 flex items-center justify-center flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          onChange={changeHandler}
          placeholder="Enter Title"
          className="w-full outline-none p-3 rounded-md border border-black"
        />
        <input
          name="description"
          onChange={changeHandler}
          id="description"
          className="resize-none p-4 border border-black bo w-full outline-none rounded-md"
          value={formData.description}
          placeholder="Enter Description"
        ></input>

        <button
          type="submit"
          className="bg-black hover:bg-blue-gray-900 text-white capitalize rounded-md p-2 w-full"
        >
          ADD TODO
        </button>
      </form>
      <h1 className="text-3xl font-body text-black underline underline-offset-4 decoration-green-500 m-6 decoration-4">
        All Todos
      </h1>
      <div className="relative overflow-x-auto w-full m-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, index) => {
              return (
                <Todo
                  id={index + 1}
                  title={todo.title}
                  description={todo.description}
                  isCompleted={todo.isCompleted}
                  mongoId={todo._id}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default App;
