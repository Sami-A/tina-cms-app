import React from "react";

import { Inter } from "next/font/google";

import client from "../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

import Hero from "../components/hero";
import ProductList from "../components/product/productList";
import Testimonials from "../components/testimonial/testimonials";
import ContactUs from "../components/contactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { data, isLoading } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data.homePage.blocks
        ? data.homePage.blocks.map(function (block: any, i: number) {
            switch (block.__typename) {
              case "HomePageBlocksHero":
                return (
                  <React.Fragment key={`${i}-${block?.__typename}`}>
                    <Hero data={block} />
                  </React.Fragment>
                );
              case "HomePageBlocksProducts":
                return (
                  <React.Fragment key={`${i}-${block?.__typename}`}>
                    <ProductList data={block} />
                  </React.Fragment>
                );
              case "HomePageBlocksTestimonials":
                return (
                  <React.Fragment key={`${i}-${block?.__typename}`}>
                    <Testimonials data={block} />
                  </React.Fragment>
                );
              case "HomePageBlocksContactUs":
                return (
                  <React.Fragment key={`${i}-${block?.__typename}`}>
                    <ContactUs data={block} />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </main>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.homePage({
    relativePath: "data.json",
  });

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
};
