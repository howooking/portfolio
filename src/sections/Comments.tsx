"use client";

import Container from "@/components/Container";
import { useSession, signIn, signOut } from "next-auth/react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CommentBox from "@/components/CommentBox";

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
  const router = useRouter();

  const { data: session } = useSession();

  const queryClient = useQueryClient();

  let toastCommentId: string;
  const [commentInput, setCommentInput] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCommentInput(event.target.value);

  // GET ALL THE COMMENTS
  const getAllComments = async () => await axios("/api/comments/getComments");
  const { data, error, isLoading } = useQuery({
    queryKey: [`comments`],
    queryFn: getAllComments,
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
    onSettled: () => {
      setDisabled(false);
      setCommentInput("");
      queryClient.invalidateQueries(["comments"]);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!session?.user?.name) {
      signIn();
      router.push("/#comments");
    }
    toastCommentId = toast.loading("코멘트 다는 중");
    console.log(toastCommentId);
    setDisabled(true);
    mutateAddComment(commentInput);
  };

  if (error) error;
  if (isLoading) return <p>Loading</p>;
  return (
    <section className='z-0 h-screen' id='comments'>
      <SectionHeading>Comments</SectionHeading>
      <Container>
        <div className='shadow-lg'>
          <div className='flex h-[70vh] w-full flex-col-reverse overflow-scroll bg-blue-100'>
            {/* <div className='flex flex-col-reverse gap-2'> */}
            {data?.data.map((comment: Comment) => {
              const isMe =
                session?.user?.email === comment.author.email ? true : false;
              return (
                <CommentBox key={comment.id} text={comment.text} isMe={isMe} />
              );
            })}
            {/* </div> */}
          </div>
          <div className='w-full bg-fuchsia-100'>
            <form action='POST' onSubmit={handleSubmit}>
              <div className='flex'>
                <input
                  type='text'
                  className='flex-1 p-2'
                  value={commentInput}
                  onChange={handleChange}
                />
                <button
                  className={`btn-error btn ${
                    session?.user?.name ? "" : "hidden"
                  }`}
                  onClick={() => signOut()}
                  disabled={disabled}
                >
                  로그아웃
                </button>
                <button
                  className='btn-primary btn'
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
