import type { Context } from "hono";
import * as jwt from "hono/jwt";
import env from "../../env.js";
import { getCaptchaImage, randomTextGenerator } from "./captcha.service.js";

export const captchaController = async (c: Context) => {
   // create captcha
   const captcha = randomTextGenerator();
   const token = await jwt.sign({ exp: Date.now() / 1000 + 60 * 2 }, captcha + env.JWT_SIGN_KEY, "HS256");
   // serve the image
   c.header("Json-Web-Token", token);
   c.header("Content-Type", "image/png");
   return c.body(await getCaptchaImage(captcha));
};

export const captchaValidator = async (c: Context) => {
   const jwtHeader = c.req.header("Json-Web-Token");
   const captcha = c.req.header("Captcha");

   if (!jwtHeader || !captcha) return c.text("Header not Found", 400);

   await jwt.verify(jwtHeader, captcha.toUpperCase() + env.JWT_SIGN_KEY, "HS256");

   return c.text("Verify Success", 201);
};
