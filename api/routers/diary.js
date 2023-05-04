const { Router } = require('express');

const authenticator = require("../middleware/authenticator");
const postController = require('../controllers/diary.js');

const postRouter = Router();

postRouter.get("/", authenticator, postController.index);
postRouter.post("/", authenticator, postController.create);
postRouter.get("/:id", authenticator, postController.show);
postRouter.delete("/:id",authenticator, postController.destroy);
postRouter.patch("/:id",authenticator, postController.update);

module.exports = postRouter;