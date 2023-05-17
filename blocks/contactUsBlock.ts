import type { TinaTemplate } from "tinacms";

const contactUsBlock: TinaTemplate = {
  name: "contactUs",
  label: "Contact Us",
  ui: {
    defaultItem: {
      header: "Contact Us",
      title: "Let's talk!",
      subTitle: "Fill in the form to start a conversation.",
      bigImage: "/asset/doodle.png",
      fullName: "Full Name",
      email: "Email",
      message: "Message",
    },
  },
  fields: [
    {
      type: "string",
      label: "Header",
      name: "header",
    },
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
    {
      type: "image",
      label: "Message",
      name: "bigImage",
    },
    {
      type: "string",
      label: "FullName",
      name: "fullName",
    },
    {
      type: "string",
      label: "Email",
      name: "email",
    },
    {
      type: "string",
      label: "Message",
      name: "message",
    },
  ],
};

export default contactUsBlock;
