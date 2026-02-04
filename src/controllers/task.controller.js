import Task from "/home/hp/projects/saas-backend/src/models/task.model.js";

/* CREATE */
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      owner: req.user._id,
      organization: req.user.organization._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Create failed" });
  }
};

/* GET ALL (ONLY OWN) */
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      organization: req.user.organization._id,
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Fetch failed" });
  }
};

/* UPDATE */
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      organization: req.user.organization._id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    Object.assign(task, req.body);

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

/* DELETE */
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      organization: req.user.organization._id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};
