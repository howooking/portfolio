"use client";

import CommentBox from "@/components/CommentBox";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import axios, { AxiosError } from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineSend } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";

export type Comment = {
  author: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
  id: string;
  createdAt: string;
  updatedAt: string;
  like: number;
  text: string;
};

export default function Comments() {
  const { ref, inView } = useInView();

  const { data: session } = useSession();

  const queryClient = useQueryClient();

  let toastCommentId: string;
  const [commentInput, setCommentInput] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCommentInput(event.target.value);

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: "comments",
    queryFn: async ({ pageParam = "" }) => {
      const res = await axios.get(
        `/api/comments/getComments?cursor=${pageParam}`
      );
      return res.data;
    },
    getNextPageParam: (lastPage) => lastPage.nextId ?? false,
  });

  // ADD COMMENT
  const { mutate: mutateAddComment } = useMutation({
    mutationFn: async (commentInput: string) =>
      await axios.post("/api/comments/addComment", { commentInput }),
    onSuccess: ({ data }) => {
      setCommentInput("");
      toast.success(data.message, { id: toastCommentId });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data.message, { id: toastCommentId });
      }
    },
    onSettled: async () => {
      setDisabled(false);
      // await queryClient.invalidateQueries(["comments"]);
      refetch();
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!session?.user?.name) {
      signIn();
      console.log("hello");
      return;
    }
    toastCommentId = toast.loading("코멘트 다는 중");
    setDisabled(true);
    mutateAddComment(commentInput);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  if (isError) error;
  if (isLoading)
    return (
      <div className='flex h-screen items-center justify-center'>
        <Image
          alt='spinner'
          src='/images/spinner.svg'
          width={100}
          height={100}
        />
      </div>
    );
  return (
    <section className='h-screen pt-[80px]' id='comments'>
      <SectionHeading>Comments</SectionHeading>
      <Container>
        <div className='shadow-lg'>
          <div className='relative flex h-[70vh] w-full flex-col-reverse overflow-y-scroll bg-blue-100 dark:bg-gray-900'>
            {data?.pages.map((page) => (
              <div
                key={page.nextId ?? "lastPage"}
                className='flex flex-col-reverse'
              >
                {page.data.map((comment: Comment) => {
                  const isMe =
                    session?.user?.email === comment.author.email
                      ? true
                      : false;
                  return (
                    <CommentBox
                      id={comment.id}
                      key={comment.id}
                      text={comment.text}
                      isMe={isMe}
                      image={comment.author.image}
                      name={comment.author.name}
                      createdAt={comment.createdAt}
                      like={comment.like}
                    />
                  );
                })}
              </div>
            ))}
            <span className='invisible' ref={ref}>
              intersection observer marker
            </span>
          </div>
          <div className='w-full'>
            <form action='POST' onSubmit={handleSubmit}>
              <div className='flex items-center dark:bg-white'>
                <input
                  type='text'
                  className={`flex-1 px-2 dark:bg-white dark:text-black ${
                    commentInput.length >= 80 ? "text-red-400" : ""
                  }`}
                  value={commentInput}
                  onChange={handleChange}
                  placeholder={`${session?.user?.name ? "" : "OAuth 입니다."}`}
                />

                <button
                  className='btn-primary btn-xs btn'
                  onClick={() => handleSubmit}
                  disabled={disabled}
                >
                  {session?.user?.name ? <AiOutlineSend size={20} /> : "로그인"}
                </button>
                <span
                  className={`btn-error btn-xs btn ${
                    session?.user?.name ? "" : "hidden"
                  }`}
                  onClick={() => signOut()}
                >
                  <RiLogoutCircleRLine className='text-white' size={20} />
                </span>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
