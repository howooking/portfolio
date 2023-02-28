"use client";

type CommentBoxProps = {
  text: string;
  isMe: boolean;
};

export default function CommentBox({ text, isMe }: CommentBoxProps) {
  return (
    <div
      className={`mx-3 max-w-sm p-3  ${
        isMe ? "self-end bg-[#F7E600]" : "self-start bg-white"
      } shadow-md`}
    >
      {text}
    </div>
  );
}
