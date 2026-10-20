export const randomTextGenerator = () => {
   const allSingletext = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
   ];
   let text = "";
   for (let c = 4; c; c--) {
      text += allSingletext[Math.floor(Math.random() * allSingletext.length)];
   }
   return text;
};

export const getCaptchaImage = async (text: string) => {
   const response = await fetch("https://api.opencaptcha.io/captcha", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         text,
         width: 200,
         difficulty: 3,
         theme: {
            primaryColor: "#ffffff",
            secondaryColor: "#0f1126",
         },
      }),
   });
   return response.body as any;
};
