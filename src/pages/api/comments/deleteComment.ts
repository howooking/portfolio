import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const commentId = req.body;
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.email)
      return res.status(401).json({ message: "로그인 해주세요" });

    //get user
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session.user?.email,
      },
    });

    //Delete Comment
    try {
      await prisma.comment.delete({
        where: {
          id: parseInt(commentId),
        },
      });

      res
        .status(200)
        .json({ message: `${prismaUser?.name}님의 코멘트가 삭제되었습니다.` });
    } catch (error) {
      console.log("comment deletion error:", error);
      res.status(403).json({ error });
    }
  }
}
