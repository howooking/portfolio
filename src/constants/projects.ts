type Projects = {
  title: string;
  img: string;
  link: string;
  gitHubLink: string | null;
  descs: string[];
  stacks: string[];
};

export const PROJECTS: Array<Projects> = [
  {
    title: "개 정맥혈 가스분석기",
    img: "/projects/dogVBGA.png",
    link: "https://dog-vbga.firebaseapp.com/",
    gitHubLink: null,
    descs: [
      "리액트를 배우고 처음 만들었던 웹어플리케이션",
      "리액트 컴포넌트 재사용성에 대한 이해 ",
      "실제 진료과정에서 사용",
    ],
    stacks: ["React"],
  },
  {
    title: "토익 영단어 퀴즈",
    img: "/projects/toeicVoca.png",
    link: "https://toeicvoca-87530.firebaseapp.com/",
    gitHubLink: "https://github.com/howooking/tsReactTodo",
    descs: [
      "튜토리얼 지옥(tutorial hell)에서 벗어나 기획단계부터 진행",
      "Authorization, Authentication 구현",
      "타입스크립트, 리액트쿼리 첫 적용",
      "Material UI로 스타일링",
    ],
    stacks: ["React", "Typscript", "Mui", "ReactQuery", "Firebase"],
  },
  {
    title: "넥스트JS 정적 블로그",
    img: "/projects/staticSiteBlog.png",
    link: "https://nextcatblog.vercel.app/",
    gitHubLink: "https://github.com/howooking/nextcatblog",
    descs: [
      "SSR, CSR, ISR, SSG 개념 습득",
      "Markdown파일을 JSX파일로 변환, SSG 구현",
      "Next API routes를 이용하여 POST요청, 몽고디비 저장",
    ],
    stacks: ["Type-script", "Next", "Tailwind", "Mongodb"],
  },
  {
    title: "리베동물병원 홈페이지(제작 중)",
    img: "/projects/liebe.png",
    link: "https://liebenew.vercel.app/",
    gitHubLink: "https://github.com/howooking/liebenew",
    descs: [
      "전에 다녔던 병원 홈페이지를 제작하기로함",
      "웹디자인에 대해 공부",
      "애니메이션 효과를 위해 Framer-motion 적용",
      "NextJS 13버젼으로 제작",
    ],
    stacks: ["Next", "Tailwind", "Framer-motion"],
  },
  {
    title: "포트폴리오",
    img: "/projects/willBeReplaced.png",
    link: "/완성되면",
    gitHubLink: "https://github.com/howooking/portfolio",
    descs: [
      "실제 배포 까지 완료한 첫번째 프로젝트",
      "대부분의 시간은 <Comments/> 페이지를 만드는데 할애",
      "<Comments/> 페이지를 위해 억지 backend 생성",
      "backend: Prisma, Next API routes, PostgreSQL",
      "무한스크롤 구현",
    ],
    stacks: ["Next", "Tailwind", "ReactQuery", "Prisma", "Postgresql"],
  },
];
