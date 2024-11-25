import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/dataset";
import Image from "next/image";
const Testimonials = () => {
  return (
    <>
      <div
        id="testimonial"
        className="py-24  bg-gray-200 px-4  max-md:max-w-md mx-auto"
      >
        <div className="mb-8 max-w-7xl mx-auto text-center">
          <h2 className="text-gray-800 text-3xl my-3 font-extrabold">
            What our <span className="text-primary">happy clients </span> say
          </h2>
          <p>
            Hear from the people who matter most—our valued clients! Their
            stories of satisfaction and success inspire us to keep delivering
            top-notch service every day. From exceptional quality to unmatched
            support, our clients share why they trust us time and again..
          </p>
        </div>

        <div className="grid md:grid-cols-1 grid-cols-1   gap-0">
          <Carousel className="bg-gray-200 md:max-w-7xl md:mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className=" bg-gray-200 p-5">
                    <div className="max-w-6xl mx-auto relative">
                      <div className="max-w-3xl  mx-auto">
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-36 h-36 rounded-full shadow-lg object-cover border-2 border-white"
                          />

                          <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-extrabold">
                              {testimonial.name}
                            </h4>
                            <h4 className="text-gray-800 text-base font-extrabold">
                              {testimonial.role}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 text-center">
                          <p className="text-sm leading-relaxed">
                            {testimonial.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
