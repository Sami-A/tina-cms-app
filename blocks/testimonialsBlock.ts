import type { TinaTemplate } from "tinacms";

const testimonialsBlock: TinaTemplate = {
  label: "Testimonials",
  name: "testimonials",
  fields: [
    {
      label: "Testimonials",
      name: "testimonials",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name} (${item?.position})` };
        },
        defaultItem: {
          title: "Very easy this was to integrate",
          description:
            '"If you care for your time, I hands down would go with this."',
          name: "Bonnie Green",
          position: "Developer at Open AI",
          profilePic: "asset/orange-robot.png",
        },
      },
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "name",
          name: "name",
          type: "string",
        },
        {
          label: "Position",
          name: "position",
          type: "string",
        },
        {
          label: "Profile Picture",
          name: "profilePic",
          type: "image",
        },
      ],
    },
  ],
};

export default testimonialsBlock;
