import env from "../../env.js";

const callApi = async (q: string, page: number = 1) => {
   const response = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
         "X-API-KEY": env.SERPER_API_KEY,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ q, page }),
   });
   const result = await response.json();
   return result;
};

export default callApi;
