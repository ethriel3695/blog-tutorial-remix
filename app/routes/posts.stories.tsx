import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Posts from "./posts._index";
// import { RemixStub } from "../../.storybook/RemixStub";
import { rest } from "msw";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "routes/posts",
  component: Posts,
  // tags: ["autodocs"],
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.parameters = {
  msw: {
    handlers: [
      rest.get("app/routes/posts._index.tsx", (req, res, ctx) => {
        console.log("Posts Index");
        console.log(res);
        return res(
          // Respond with a 200 status code
          ctx.status(200)
        );
        //     ctx.json({
        //       slug: "/firstPost",
        //       title: "First Post",
        //       markdown: "##Title",
        //     })
        //   );
      }),
      // rest.get("/app/models/post.server.ts", (req, res, ctx) => {
      //   console.log("Server");
      //   console.log(res);
      //   return res(
      //     ctx.json([
      //       {
      //         slug: "my-first-post",
      //         title: "My First Post",
      //         markdown: "# This is my first post\n\nIsn't it great?",
      //         createdAt: "2023-05-28T13:33:08.096Z",
      //         updatedAt: "2023-05-28T13:33:08.096Z",
      //       },
      //       {
      //         slug: "90s-mixtape",
      //         title: "A Mixtape I Made Just For You",
      //         markdown:
      //           "# 90s Mixtape\n" +
      //           "\n" +
      //           "- I wish (Skee-Lo)\n" +
      //           "- This Is How We Do It (Montell Jordan)\n" +
      //           "- Everlong (Foo Fighters)\n" +
      //           "- Ms. Jackson (Outkast)\n" +
      //           "- Interstate Love Song (Stone Temple Pilots)\n" +
      //           "- Killing Me Softly With His Song (Fugees, Ms. Lauryn Hill)\n" +
      //           "- Just a Friend (Biz Markie)\n" +
      //           "- The Man Who Sold The World (Nirvana)\n" +
      //           "- Semi-Charmed Life (Third Eye Blind)\n" +
      //           "- ...Baby One More Time (Britney Spears)\n" +
      //           "- Better Man (Pearl Jam)\n" +
      //           "- It's All Coming Back to Me Now (Céline Dion)\n" +
      //           "- This Kiss (Faith Hill)\n" +
      //           "- Fly Away (Lenny Kravits)\n" +
      //           "- Scar Tissue (Red Hot Chili Peppers)\n" +
      //           "- Santa Monica (Everclear)\n" +
      //           "- C'mon N' Ride it (Quad City DJ's)",
      //         createdAt: "2023-05-28T13:33:08.097Z",
      //         updatedAt: "2023-05-28T13:33:08.097Z",
      //       },
      //       {
      //         slug: "test",
      //         title: "Test",
      //         markdown: "## Second header\nHello",
      //         createdAt: "2023-05-28T14:03:54.698Z",
      //         updatedAt: "2023-05-28T14:03:54.698Z",
      //       },
      //     ])
      //   );
      // }),
      // rest.get("/app/db.server.ts", (req, res, ctx) => {
      //   console.log("DB");
      //   console.log(res);
      //   return res(ctx.status(200));
      // }),
    ],
  },
};
