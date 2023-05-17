import type { TinaTemplate } from "tinacms";

const heroBlock: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      title: "Limited Edition Products",
      subTitle: "Order yours at a discounted price",
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Sub Title",
      name: "subTitle",
    },
  ],
};

export default heroBlock;
