const { Router } = require("express");
const {
  getMessages,
  getMessageById,
  addMessage,
} = require("../controllers/messageController");

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Add new message" });
});

indexRouter.post("/new", addMessage);

indexRouter.get("/message/:id", getMessageById);

module.exports = indexRouter;
