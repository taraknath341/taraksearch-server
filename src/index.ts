import { Hono } from "hono";
import { cors } from "hono/cors";
import env from "../env.js";
import searchRouter from "./search/search.router.js";
import captchaRouter from "./captcha/captcha.router.js";

const app = new Hono();

app.use(
   cors({
      origin: env.FRONTEND_URL,
      exposeHeaders: ["Json-Web-Token", "Captcha"],
   }),
);

app.route("/search", searchRouter);
app.route("/captcha", captchaRouter);

app.onError((err, c) => {
   return c.text(err.message, 400);
});

export default app;
