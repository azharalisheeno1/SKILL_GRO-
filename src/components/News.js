import pic from "../../public/asssets/support.png";
import Image from "next/image";
const News = () => {
  return (
    <>
      <div className="py-14  px-4 ">
        <div className="max-w-7xl justify-between flex  md:mx-auto md:flex-row flex-col items-center  ">
          <div className=" max-w-4xl">
            <h2 className="text-xl md:text-3xl font-semibold mb-6">
              Stay in the Loop with Our Latest Updates!
            </h2>
            <p className="text-base ">
              Sign up for our newsletter to stay informed with exclusive news,
              exciting offers, and expert tips tailored just for you. Be the
              first to know about the latest trends, updates, and opportunities
              that matter most. Join our community and let valuable insights
              come directly to your inbox!
            </p>

            <div className=" flex my-10  h-12 md:px-0 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="md:w-80 w-60 border  bg-gray-50 py-2 px-4  text-base focus:outline-none rounded"
              />
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg text-sm tracking-wider  border border-current outline-none bg-primary hover:bg-transparent font-semibold text-white hover:text-primary transition-all duration-300"
              >
                Notify me
              </button>
            </div>
          </div>
          <div >
            <Image
              src={pic}
              alt="loading "
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
