"use client";

import CommentBox from "@/components/CommentBox";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import axios, { AxiosError } from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useMutation } from "react-query";

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
  const { data: session } = useSession();

  //GETTING COMMENTS
  const {
    isLoading,
    isError,
    data,
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

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  ///POST A COMMENT
  let toastCommentId: string;

  const [commentInput, setCommentInput] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCommentInput(event.target.value);

  const [disabled, setDisabled] = useState<boolean>(false);

  const { mutate: mutateAddComment } = useMutation({
    mutationFn: async (commentInput: string) =>
      await axios.post("/api/comments/addComment", { commentInput }),
    mutationKey: "comments",
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
      refetch();
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!session?.user?.name) {
      signIn();
      return;
    }
    toastCommentId = toast.loading("코멘트 다는 중");
    setDisabled(true);
    mutateAddComment(commentInput);
  };

  if (isError) return <>Error!!</>;
  if (isLoading)
    return (
      <div className='flex h-screen items-center justify-center'>
        <Image
          alt='spinner'
          src='/images/spinner.svg'
          width={100}
          height={100}
          priority
        />
      </div>
    );
  return (
    <section className='sec-h my-auto' id='comments'>
      <div className='flex items-center justify-center gap-4 py-2'>
        <SectionHeading>Comments</SectionHeading>
        <button
          className={`btn-error btn-sm btn ${
            session?.user?.name ? "" : "hidden"
          } z-40`}
          onClick={() => signOut()}
        >
          로그아웃
        </button>
      </div>
      <Container>
        <div className='shadow-lg'>
          <div className='relative flex h-[70vh] w-full flex-col-reverse overflow-y-scroll bg-blue-100 dark:bg-gray-900 sm:h-[75vh]'>
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
                {isFetchingNextPage && (
                  <div className='text-center font-bold'>로딩중...</div>
                )}
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
                  className={`flex-1 py-3 px-2 text-xs dark:bg-white dark:text-black sm:text-base ${
                    commentInput.length >= 80
                      ? "text-red-400 dark:text-red-400"
                      : ""
                  }`}
                  value={commentInput}
                  onChange={handleChange}
                  placeholder={`${
                    session?.user?.name
                      ? "삭제 가능! 코멘트를 남겨주세요!"
                      : "로그인해주세요"
                  }`}
                />

                <button
                  className='btn-accent btn'
                  onClick={() => handleSubmit}
                  disabled={disabled}
                >
                  {session?.user?.name ? "전송" : "로그인"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
