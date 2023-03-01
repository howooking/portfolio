import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const commentId = req.body.data;
    // increase like
    try {
      const selectedComment = await prisma.comment.update({
        where: {
          id: commentId,
        },
        data: {
          like: {
            increment: 1,
          },
        },
      });
      res.status(200);
      res.send({ message: "좋아요 증가!" });
    } catch (err) {
      res.status(403).json({ err: "좋아요 에러 발생" });
    }
  }
}
