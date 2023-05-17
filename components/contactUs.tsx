import Image from "next/image";

type ContactUsProps = {
  header: string;
  title: string;
  subTitle: string;
  bigImage: string;
  fullName: string;
  email: string;
  message: string;
};

const ContactUs = ({ data }: { data: ContactUsProps }) => (
  <div className="px-2 md:px-8 flex flex-col items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
    <div className="mb-7">
      <h2 className="my-4 text-4xl font-extrabold dark:text-white">
        {data.header}
      </h2>

      <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              {data.title}
            </h2>
            <div className="dark:text-gray-400">{data.subTitle}</div>
          </div>
          <Image
            width="270"
            height="200"
            className="p-6 h-52 md:h-64"
            src={data.bigImage}
            alt=""
          />
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              {data.fullName}
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-800 border border-gray-200
dark:border-gray-700"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              {data.email}
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-800 border border-gray-200
dark:border-gray-700"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              {data.message}
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-800 border border-gray-200
dark:border-gray-700"
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full text-white lg:border hover:border-black  focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white hover:dark:bg-gray-300 dark:text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default ContactUs;
