import Image from "next/image";
import boy from "../../public/asssets/banner.png";
const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="grid max-w-7xl   px-4 md:px-0 py-24 mx-auto lg:gap-8 xl:gap-0 lg:py-28   lg:grid-cols-12"
      >
        <div className="mr-auto place-self-center lg:col-span-7 leading-8 ">
          <h1 className="max-w-2xl  my-4 text-2xl font-extrabold   md:text-3xl xl:text-4xl dark:text-white">
            Boost your career with{" "}
            <span className="text-primary">virtual learning</span> platforms
          </h1>
          <p className="max-w-2xl text-gray-700 mb-6   lg:mb-5 md:text-md  text-justify ">
            Online courses offer a convenient way to expand your skills and
            knowledge from the comfort of your home. Whether you’re looking to
            advance in your career or explore new interests, there are countless
            resources available to help you grow. Investing in your learning
            today can lead to exciting opportunities and personal growth
            tomorrow
          </p>

          <button
            type="button"
            className="px-5 py-2.5 rounded-lg text-sm tracking-wider  border border-current outline-none bg-primary hover:bg-transparent font-semibold text-white hover:text-blue-700 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
        <div className=" mt-5  md:mt-0 lg:col-span-5 lg:flex">
          <Image src={boy} alt="girl" width={500} height={400} />
        </div>
      </div>
    </>
  );
};

export default Hero;
