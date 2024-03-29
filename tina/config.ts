import { defineConfig } from "tinacms";
import type { TinaTemplate } from "tinacms";

import {
  heroBlock,
  productsBlock,
  testimonialsBlock,
  contactUsBlock,
} from "../blocks";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: "main",
  clientId: process.env.CLIENT_ID, // process.env.CLIENT_ID,
  token: process.env.TOKEN, // process.env.TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Home Page",
        name: "homePage",
        path: "content/homePage",
        format: "json",
        fields: [
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Components",
            templates: [
              heroBlock,
              productsBlock,
              testimonialsBlock,
              contactUsBlock,
            ],
          },
        ],
        ui: {
          router: () => `/`,
        },
      },
    ],
  },
});
