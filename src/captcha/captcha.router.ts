import { Hono } from "hono";
import { captchaController, captchaValidator } from "./captcha.controller.js";

const captchaRouter = new Hono();

captchaRouter.get("/", captchaController);

captchaRouter.get("/verify", captchaValidator);

export default captchaRouter;
