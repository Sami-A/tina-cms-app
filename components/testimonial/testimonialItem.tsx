import Image from "next/image";
import { TestimonialItemProps } from "./types";

const TestimonialItem = ({ item }: { item: TestimonialItemProps }) => (
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200  md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="my-4">{item.description}</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <Image
        width="9"
        height="9"
        className="rounded-full w-9 h-9"
        src={item.profilePic}
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div>{item.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {item.position}
        </div>
      </div>
    </figcaption>
  </figure>
);

export default TestimonialItem;
