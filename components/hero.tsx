export type HeroProps = { title: string; subTitle: string };

const Hero = ({ data }: { data: HeroProps }) => {
  return (
    <div className="min-h-[500px] relative flex flex-col justify-center place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#eee] after:dark:opacity-40 before:lg:h-[360px]">
      <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {data.title}
      </h1>
      <h4 className="font-extrabold text-gray-900 dark:text-white">
        {data.subTitle}
      </h4>
    </div>
  );
};

export default Hero;
