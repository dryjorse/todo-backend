const express = require("express");
const router = express.Router();
const { Todo } = require("../models");

// Create todo
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
});

// Get all todos
router.get("/", async (req, res) => {
  const { completed, offset = 0, limit = 4 } = req.query;

  const where = {};
  if (completed === "true") where.completed = true;
  if (completed === "false") where.completed = false;

  const todos = await Todo.findAll({
    where,
    order: [["createdAt", "DESC"]],
  });

  const results = {
    count: todos.length,
    results: todos.slice(offset, offset + limit),
  };

  res.json(results);
});

// Update todo
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  await todo.update(req.body);
  res.json(todo);
});

// Delete todo
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findByPk(id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  await todo.destroy();
  res.json(todo);
});

module.exports = router;
