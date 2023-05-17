import type { TinaTemplate } from "tinacms";

const productsBlock: TinaTemplate = {
  label: "Products",
  name: "products",
  fields: [
    {
      label: "Products",
      name: "products",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.productName} - (${item?.productPrice} )` };
        },
        defaultItem: {
          productPic: "/asset/hugo-boss-swiss-quartz.png",
          productName: "Hugo Boss Quartz",
          productPrice: "$2500",
        },
      },
      fields: [
        {
          label: "Product Picture",
          name: "productPic",
          type: "image",
        },
        {
          label: "Product Name",
          name: "productName",
          type: "string",
        },
        {
          label: "Product Price",
          name: "productPrice",
          type: "string",
        },
      ],
    },
  ],
};

export default productsBlock;
