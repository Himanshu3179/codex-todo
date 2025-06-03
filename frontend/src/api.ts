export interface Todo {
  _id?: string;
  text: string;
  completed: boolean;
}

const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${API_URL}/todos`);
  return res.json();
}

export async function addTodo(text: string): Promise<Todo> {
  const res = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  return res.json();
}

export async function updateTodo(todo: Todo): Promise<Todo> {
  const res = await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return res.json();
}

export async function deleteTodo(id: string): Promise<void> {
  await fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' });
}
