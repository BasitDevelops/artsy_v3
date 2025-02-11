import React, { useEffect, useState } from "react";
import ell14 from "../../../assets/images/Ellipse 14.png";
import ell15 from "../../../assets/images/Ellipse 15.png";
import ell16 from "../../../assets/images/Ellipse 16.png";
import ell17 from "../../../assets/images/Ellipse 17.png";
import ell18 from "../../../assets/images/Ellipse 18.png";
import { useNavigate } from "react-router";
import { RightArrowIcon } from "../../../assets/icons";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/fa83e60319a4dc9a4306d86ff65d24ba565237a3/products.json",
    )
      .then((response) => response.json())
      .then((data) => setFeaturedProducts(data.featured_products));
  }, []);

  return (
    <div className="px-4 lg:px-16">
      <h2 className="mb-4 font-Satoshi text-2xl font-bold text-[#292929] lg:text-4xl lg:font-medium lg:text-[#333333]">
        Featured products
      </h2>

      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 border-t-[0.5px] border-[#333333] py-8 lg:flex-row lg:gap-8 lg:odd:flex-row-reverse"
        >
          <div className="group relative lg:w-1/2">
            <img
              src={product.url}
              className="h-[250px] w-full object-cover md:h-[350px]"
            />
            <div
              onClick={() => navigate("/marketplace")}
              className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center gap-4 bg-[#00000099] p-4 duration-500 group-hover:opacity-100 lg:opacity-0"
            >
              <h3 className="font-ClashDisplay text-xl font-semibold text-[#ffffff]">
                {window.screen.width < 1024 ? product.title : "View Product"}
              </h3>
              <RightArrowIcon stroke="#ffffff" fill="#ffffff" />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:w-1/2">
            <h3 className="hidden font-ClashDisplay text-3xl font-medium text-[#333333] lg:flex">
              {product.title}
            </h3>
            <p className="font-Satoshi text-base text-[#616161] lg:text-xl">
              {product.desc}
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="flex">
                  <img src={ell14} className="h-10 w-10 lg:h-full lg:w-full" />
                  <img
                    src={ell15}
                    className="ml-[-20px] h-10 w-10 lg:h-full lg:w-full"
                  />
                  <img
                    src={ell16}
                    className="ml-[-20px] h-10 w-10 lg:h-full lg:w-full"
                  />
                  <img
                    src={ell17}
                    className="ml-[-20px] h-10 w-10 lg:h-full lg:w-full"
                  />
                  <img
                    src={ell18}
                    className="ml-[-20px] h-10 w-10 lg:h-full lg:w-full"
                  />
                </div>
                <p className="font-Satoshi text-sm font-medium text-black lg:text-lg lg:font-normal lg:text-[#333333]">
                  {product.creatorCount} major{" "}
                  {product.creatorCount > 1 ? "creators" : "creator"}
                </p>
              </div>
              <button
                onClick={() => navigate("/marketplace")}
                className="hidden lg:flex"
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
