import { Schema, model } from 'mongoose';

export interface ITodo {
  text: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default model<ITodo>('Todo', todoSchema);
