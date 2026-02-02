import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 保持你原本开启的编译器优化 */
  reactCompiler: true,

  /* 关键修改 1: 禁用图片自动优化（针对 Netlify 免费版最稳妥的方案） */
  images: {
    unoptimized: true,
  },

  /* 关键修改 2: 确保路径一致性 */
  trailingSlash: true,

  /* 如果你的项目有特定的输出需求，可以根据报错增加此项 */
  // output: 'export', // 只有在做纯静态导出时才开启
};

export default nextConfig;
