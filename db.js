const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Salut tout le monde!",
    user: "citronoiseau",
    added: new Date(),
  },
  {
    text: "Hallo zusammen!",
    user: "Zitronenvogel",
    added: new Date(),
  },
];

async function getMessages() {
  return messages;
}

async function getMessageByAuthor(authorName) {
  return messages.find(
    (message) => message.user.toLowerCase() === authorName.toLowerCase()
  );
}

async function addMessage(text, user) {
  messages.push({ text: text, user: user, added: new Date() });
}

module.exports = { getMessages, getMessageByAuthor, addMessage };
