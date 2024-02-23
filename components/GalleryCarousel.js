import Container from "./container";
import { Carousel } from "@material-tailwind/react";

const GalleryCarousel = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <Carousel
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-5 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="/img/brands/roof.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/img/brands/bright.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/img/brands/pipe.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/img/brands/plumb.jpg"
            alt="image 4"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </Container>
  );
};

export default GalleryCarousel;
