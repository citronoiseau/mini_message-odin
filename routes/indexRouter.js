const { Router } = require("express");
const {
  getMessages,
  getMessageByAuthor,
  addMessage,
} = require("../controllers/messageController");

const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Add new message" });
});

indexRouter.post("/new", addMessage);

indexRouter.get("/message/:authorName", getMessageByAuthor);

module.exports = indexRouter;
