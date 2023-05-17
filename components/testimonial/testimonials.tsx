import { TestimonialsProps, TestimonialItemProps } from "./types";
import TestimonialItem from "./testimonialItem";

const Testimonials = ({ data }: { data: TestimonialsProps }) => {
  return (
    <div className="px-2 md:px-8 flex flex-col items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
      <div className="mb-7 xs:px-8">
        <h2 className="my-4 text-4xl font-extrabold dark:text-white">
          Testimonials
        </h2>
        <div className="grid lg:grid-cols-2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
          {data?.testimonials?.map((item: TestimonialItemProps, i: number) => (
            <TestimonialItem key={`${i}-${item}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
