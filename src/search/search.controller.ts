import { type Context } from "hono";
import callApi from "./search.service.js";

const searchController = async (c: Context) => {
   const { q, page } = c.req.query();

   const searchResult = await callApi(q, +page);

   return c.json(searchResult.organic);
};

export default searchController;
