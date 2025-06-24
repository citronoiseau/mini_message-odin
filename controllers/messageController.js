const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getMessages();

  if (!messages) {
    throw new CustomNotFoundError("No messages found");
  }
  res.render("index", { title: "Mini Messageboard", messages });
});

const addMessage = asyncHandler(async (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(400).send("User and text are required");
  }

  await db.addMessage(text, user);
  res.redirect("/");
});

const getMessageByAuthor = asyncHandler(async (req, res) => {
  const { authorName } = req.params;

  const message = await db.getMessageByAuthor(authorName);
  if (!message) {
    throw new CustomNotFoundError("User not found");
  }
  res.render("messageInfo", { user: message.user, text: message.text });
});

module.exports = { getMessages, getMessageByAuthor, addMessage };
