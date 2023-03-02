import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const limit = 500;
    const cursor = req.query.cursor ?? "";
    const cursorObj =
      cursor === "" ? undefined : { rid: parseInt(cursor as string) };

    // Get comments
    try {
      const data = await prisma.comment.findMany({
        take: limit,
        cursor: cursorObj,
        skip: cursor === "" ? 0 : 1,
        include: {
          author: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json({
        data,
        nextId: data.length === limit ? data[limit - 1].id : undefined,
      });
    } catch (err) {
      res
        .status(403)
        .json({ err: "Error has occured while getting all the comments" });
    }
  }
}
