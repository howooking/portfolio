"use client";

import Image from "next/image";
import moment from "moment";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { FcLike } from "react-icons/fc";
import toast from "react-hot-toast";

type CommentBoxProps = {
  id: string;
  text: string;
  isMe: boolean;
  image: string;
  name: string;
  createdAt: string;
  like: number;
};

export default function CommentBox({
  id,
  text,
  isMe,
  image,
  name,
  createdAt,
  like,
}: CommentBoxProps) {
  const queryClient = useQueryClient();

  const dateToReadable = (createdAt: string) =>
    moment(createdAt).format("YYYY-MM-DD HH:mm");

  //delete comment
  let toastCommentId: string;
  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: async (commentId: string) =>
      await axios.delete("/api/comments/deleteComment", { data: commentId }),
    mutationKey: "comments",
    onSuccess: ({ data }) => {
      toast.success(data.message, { id: toastCommentId });
    },
    onError: (error) => {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error("코멘트 삭제중에 에러발생", {
          id: toastCommentId,
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const hadleDelete = (commentId: string) => {
    mutateDeleteComment(commentId);
    toastCommentId = toast.loading("코멘트 삭제 중");
  };

  const { mutate: mutateIncreaseLike } = useMutation({
    mutationFn: async (commentId: string) =>
      await axios.put("/api/comments/increaseLike", { data: commentId }),
    mutationKey: "comments",
    onSettled: () => queryClient.invalidateQueries("comments"),
  });
  const handleLike = async (commentId: string) => {
    mutateIncreaseLike(commentId);
  };

  return (
    <div
      className={`${
        isMe ? "self-end" : "self-start"
      } flex items-start gap-2 p-2`}
    >
      <div className='relative h-[35px] w-[35px]'>
        <Image
          alt='proflie'
          src={image || "/images/defaultProfile.png"}
          fill
          className='mask mask-squircle object-cover'
          sizes='5vw'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <div>{name}</div>
          <RiDeleteBin5Line
            className={`${
              isMe ? "" : "hidden"
            } cursor-pointer transition-all duration-150 hover:rotate-12 hover:scale-125`}
            onClick={() => hadleDelete(id)}
          />

          <div className='flex items-center gap-1'>
            <FcLike
              className='cursor-pointer transition-all duration-150 hover:rotate-12 hover:scale-125'
              onClick={() => handleLike(id)}
            />
            <span>{like}</span>
          </div>
        </div>
        <div
          className={`max-w-[15rem] sm:max-w-md ${
            isMe
              ? "self-end bg-[#F7E600] dark:text-black"
              : "self-start bg-white dark:bg-gray-700"
          } rounded-lg py-1 px-2 text-xs shadow-md sm:text-lg`}
        >
          {text}
        </div>
        <div className='text-xs text-gray-500'>{dateToReadable(createdAt)}</div>
      </div>
    </div>
  );
}
