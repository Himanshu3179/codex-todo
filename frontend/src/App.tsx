import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './api';
import type { Todo } from './api';
import './index.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const create = async () => {
    if (!text.trim()) return;
    const newTodo = await addTodo(text);
    setTodos([...todos, newTodo]);
    setText('');
  };

  const toggle = async (t: Todo) => {
    const updated = await updateTodo({ ...t, completed: !t.completed });
    setTodos(todos.map((todo) => (todo._id === updated._id ? updated : todo)));
  };

  const remove = async (id?: string) => {
    if (!id) return;
    await deleteTodo(id);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow rounded p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Codex Todo</h1>
        <div className="flex mb-4">
          <input
            className="flex-grow border rounded-l px-2 py-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add todo"
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-r"
            onClick={create}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((t) => (
            <li
              key={t._id}
              className="flex items-center justify-between border-b py-2"
            >
              <span
                className={t.completed ? 'line-through text-gray-500' : ''}
                onClick={() => toggle(t)}
              >
                {t.text}
              </span>
              <button
                className="text-red-500"
                onClick={() => remove(t._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
