// import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export async function getPosts(): Promise<Pick<Post, "slug" | "title" | "markdown">[]> {
  console.log(process.env);
  if (process.env.IS_STORYBOOK) {
    return [
      {
        slug: "/firstPost",
        title: "First Post",
        markdown: "##Title",
      },
    ];
  }
  // In the non-storybook case, return posts from the database with only the fields we need
  return prisma.post.findMany({
    select: {
      slug: true,
      title: true,
      markdown: true,
    },
  });
}

export async function getPost(slug: string) {
  if (process.env.IS_STORYBOOK) {
    return [
      {
        slug: "/firstPost",
        title: "First Post",
        markdown: "##Title",
      },
    ];
  } else {
    return prisma.post.findUnique({ where: { slug } });
  }
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  if (process.env.IS_STORYBOOK) {
    return null;
  } else {
    return prisma.post.create({ data: post });
  }
}
