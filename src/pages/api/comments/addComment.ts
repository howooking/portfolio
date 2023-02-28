import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { commentInput } = req.body;

    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.email)
      return res.status(401).json({ message: "로그인 해주세요" });

    //get user
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session.user?.email,
      },
    });
    console.log("commentInput:", commentInput);
    console.log("prismaUser:", prismaUser);

    if (commentInput.length > 100)
      return res.status(403).json({ message: "100글자 안으로" });
    if (!commentInput.length)
      return res.status(403).json({ message: "글은 써야지" });

    //Create Comment

    try {
      const newComment = await prisma.comment.create({
        data: {
          text: commentInput,
          authorId: prismaUser!.id,
        },
      });

      res.status(200).json({ message: "코멘트가 달렸습니다." });
    } catch (err) {
      console.log("comment creation error:", err);
      res.status(403).json({ err: "코멘트 작성 중 에러 발생" });
    }
  }
}
