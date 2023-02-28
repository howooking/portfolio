import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    //Get all Comments
    try {
      const data = await prisma.comment.findMany({
        include: {
          author: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res
        .status(403)
        .json({ err: "Error has occured while getting all the comments" });
    }
  }
}
