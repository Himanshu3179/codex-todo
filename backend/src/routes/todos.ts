import { Router } from 'express';
import Todo from '../models/Todo';

const router = Router();

router.get('/', async (_, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post('/', async (req, res) => {
  const todo = await Todo.create({ text: req.body.text, completed: false });
  res.json(todo);
});

router.put('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
