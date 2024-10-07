import { NextResponse } from "next/server";
import { connectDb } from "@/lib/config/db";
import { todoModel } from "@/lib/models/todoModel";

connectDb();

export async function POST(request) {
  const { title, description } = await request.json();

  const newTodo = await todoModel.create({ title, description });

  return NextResponse.json(newTodo);
}

export async function GET(request) {
  const allTodos = await todoModel.find({});
  return NextResponse.json(allTodos);
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");

  const todo = await todoModel.findByIdAndDelete(id);

  return NextResponse.json(todo);
}
