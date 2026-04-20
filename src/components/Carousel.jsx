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
    <div className="mx-10 px-10 my-10 py-10">
      <img src={bannerImages[currentImageIndex]} />
    </div>
  );
}

export default Carousel;
