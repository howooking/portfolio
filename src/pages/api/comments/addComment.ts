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

    // Get user
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session.user?.email,
      },
    });

    if (commentInput.length >= 80)
      return res.status(403).json({ message: "80자 이내로 적어주세요" });
    if (!commentInput.length)
      return res.status(403).json({ message: "코멘트를 적어주세요" });

    // Create Comment
    try {
      await prisma.comment.create({
        data: {
          text: commentInput,
          authorId: prismaUser!.id,
        },
      });

      res
        .status(200)
        .json({ message: `${prismaUser?.name}님의 코멘트가 등록되었습니다.` });
    } catch (err) {
      console.log("comment creation error:", err);
      res.status(403).json({ err: "코멘트 작성 중 에러 발생" });
    }
  }
}
