import type { Context } from "hono";
import * as jwt from "hono/jwt";
import env from "../../env.js";

export const captchaValidator = async (c: Context, next: any) => {
   const jwtHeader = c.req.header("Json-Web-Token");
   const captcha = c.req.header("Captcha");

   if (!jwtHeader || !captcha) return c.text("Header not Found", 400);

   await jwt.verify(jwtHeader, captcha.toUpperCase() + env.JWT_SIGN_KEY, "HS256");
   return await next();
};
