import { useEffect, useState } from "react";
const bannerImages = [
  "https://images.unsplash.com/photo-1589244159943-460088ed5c92?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763553113332-800519753e40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525441273400-056e9c7517b3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === bannerImages.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full mt-8 px-8">
      <div className=" relative   w-full h-[22rem] sm:h-[28rem] md:h-[36rem] lg:h-[44rem] xl:h-[50rem] ">
        <div className="absolute inset-0">
          <img
            src={bannerImages[currentImageIndex]}
            className="  w-full h-full object-cover rounded-2xl"
          />
          <div className="inset-0 absolute bg-black/50 rounded-2xl mask-b-from-neutral-100  "></div>
        </div>
        {/* mask-b-from-neutral-400 inset */}
        <div className="relative px-8 h-full">
          <div className=" text-center z-10 absolute top-1/2 left-1/2 italic font-medium -translate-x-1/2 -translate-y-1/2">
            <span className="text-[#F4FDD9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl       ">
              Make your Occassion Flourish
            </span>
          </div>
          <div className="absolute bottom-20  right-12">
            <button
              className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
            font-medium
            p-2 sm:p-3 md:p-4
            mx-2
            border-2
            bg-yellow-50
            rounded-md
            hover:bg-amber-100
            transition-colors duration-700
            hover:cursor-pointer
            "
            >
              <span>Book Event</span>
              <div></div>
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("product-list")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
            font-medium
            p-2 sm:p-3 md:p-4
            mx-2
            border-2
            bg-yellow-50
            rounded-md
            hover:bg-amber-100
            transition-colors duration-700
            hover:cursor-pointer
            "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
