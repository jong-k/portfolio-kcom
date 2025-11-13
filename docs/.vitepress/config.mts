import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ko-KR",
  title: "김종한의 포트폴리오",
  description: "프론트엔드 개발자 김종한의 포트폴리오 웹사이트입니다.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:title", content: "김종한의 포트폴리오" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "홈", link: "/" },
      { text: "프로젝트", link: "/node-scripts" },
    ],

    sidebar: [
      {
        text: "백오피스 개발",
        items: [{ text: "Node.js 스크립트로 다국어 JSON 파일 검사 자동화", link: "/node-scripts" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/jong-k" }],
  },
  srcExclude: ["**/README.md", "**/AGENTS.md"],
});
