// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const response = await fetch("https://formspree.io/f/xjvqjvqd", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(req.body),
//       });

//       const data = await response.json();
//       return new Response(JSON.stringify(data));
//     } catch (error) {
//       console.error(error);
//       return new Response("Internal server error", { status: 500 });
//     }
//   } else {
//     return new Response("Error sending message", { status: 400 });
//   }
// }

import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://formspree.io/f/xjvqjvqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  } else {
    res.status(400).send("Error sending message");
  }
};

export default handler as NextApiHandler;
