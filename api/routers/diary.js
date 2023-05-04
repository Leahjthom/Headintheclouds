const { Router } = require('express');

const authenticator = require("../middleware/authenticator");
const postController = require('../controllers/diary.js');

const postRouter = Router();

postRouter.get("/", authenticator, postController.index);
postRouter.post("/", postController.create);
postRouter.get("/:id", postController.show);
postRouter.delete("/:id", postController.destroy);
postRouter.patch("/:id", postController.update);

module.exports = postRouter;