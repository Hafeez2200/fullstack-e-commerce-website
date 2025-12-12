import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [isDragging, SetIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setcanScrollRight] = useState(true);

  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error)
      }
    };
    fetchNewArrivals();
  },[]);


  const handleMouseDown = (e) => {
    SetIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      return;
    }
    document.body.style.userSelect = "none";

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = (e) => {
    SetIsDragging(false);
    document.body.style.userSelect = "";
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth + 1;
      setCanScrollLeft(leftScroll > 0);
      setcanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [newArrivals]);

  return (
    <section className=" py-16 px-4 lg:px-4">
      <div className=" container mx-auto text-center mb-10 relative">
        <h2 className=" text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className=" text-lg text-gray-800 mb-8 ">
          Discover the latest styles straight off the runway, freshly added to
          keep your warbode on the cutting edge of fashion
        </p>

        {/* Scroll Button */}
        <div className=" absolute right-0 md:right-4 bottom-[-30px] flex space-x-2 ">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={` p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black "
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } `}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={` p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black "
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } `}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scroll Content */}

      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        ref={scrollRef}
        className={` container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } `}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className=" min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative "
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className=" w-full h-[450px] object-cover rounded-lg "
              draggable={false}
            />
            <div className=" absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg ">
              <Link to={`/product/${product._id}`} className=" block">
                <h4 className=" font-medium "> {product.name} </h4>
                <p className=" mt-1"> ${product.price} </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
