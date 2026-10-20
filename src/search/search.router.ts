import { Hono } from "hono";
import searchController from "./search.controller.js";
import { captchaValidator } from "./search.middleware.js";

const searchRouter = new Hono();

searchRouter.get("/", captchaValidator, searchController);

export default searchRouter;
