import React from "react";
import MensCollectionImage from "../../assets/mens-collection.webp";
import WomenCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GeneralCollectionSection = () => {
  return (
    <section className=" py-16 px-4 lg:px-10 ">
      <div className=" container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women Collection */}
        <div className=" relative flex-1">
          <img
            src={WomenCollectionImage}
            alt="Women's Collection"
            className=" w-full h-[600px] object-cover "
          />
          <div className=" absolute bottom-8 left-8 bg-white/85 p-4">
            <h2 className=" text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className=" text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* MEns Collection */}
        <div className=" relative flex-1">
          <img
            src={MensCollectionImage}
            alt="Women's Collection"
            className=" w-full h-[600px] object-cover "
          />
          <div className=" absolute bottom-8 left-8 bg-white/85 p-4">
            <h2 className=" text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className=" text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralCollectionSection;
