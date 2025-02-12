import React, { useContext, useEffect, useState } from "react";
import {
  AngleDownIcon,
  ArrowForwardCircleIcon,
  SmallRightArrow,
} from "../assets/icons";
import { useLocation, useNavigate } from "react-router";
import SuggestedProductCard from "./SuggestedProductCard";
import CartContext from "../CartContext";
import { motion } from "framer-motion";
import BeatLoader from "react-spinners/BeatLoader";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[3];

  const [productDetails, setProductDetails] = useState({});
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const decreaseCount = () => {
    if (count === 1) {
      return;
    }

    setCount((prevState) => prevState - 1);
  };

  const increaseCount = () => setCount((prevState) => prevState + 1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/ad3985705a52397ddd061e6fd342e7d1b1fe05bd/products.json",
    )
      .then((response) => response.json())
      .then((data) =>
        setProductDetails(data.products.filter((product) => product.id === id)),
      );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 px-4 pb-16 lg:px-16"
    >
      <div className="flex items-center gap-4">
        <button onClick={() => navigate("/marketplace")} className="rotate-180">
          <ArrowForwardCircleIcon />
        </button>
        <p className="font-Satoshi text-xs font-medium text-[#BCB7B7] md:text-base">
          Marketplace /{" "}
          <span className="capitalize text-black">
            {productDetails[0]?.name}
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="h-[385px] border-[#333333] lg:h-[750px] lg:w-1/2 lg:border-y lg:border-l lg:p-4">
          <img src={productDetails[0]?.url} className="h-full w-full" />
        </div>

        <div className="border-[#333333] lg:h-[735px] lg:w-1/2 lg:border-t">
          <div className="flex h-[15%] items-center justify-between border-[#333333] py-4 lg:border-x lg:border-b lg:px-4 lg:py-0">
            <h1 className="font-Satoshi text-xl font-medium capitalize text-[#333333] lg:text-3xl lg:font-bold">
              {productDetails[0]?.name}
            </h1>
            <span className="font-STIX text-xl font-medium text-[#333333] lg:text-3xl lg:font-bold">
              ${productDetails[0]?.price.usd.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 border-b border-[#333333] lg:h-[300px] lg:border-x lg:px-4">
            <p className="font-Satoshi font-medium text-[#616161] lg:text-xl lg:font-normal">
              Creator :{" "}
              <span className="font-medium capitalize text-[#4693ED]">
                {productDetails[0]?.creator}
              </span>
            </p>
            <p className="font-Satoshi font-medium capitalize text-[#616161] lg:text-xl lg:font-normal lg:text-black">
              {productDetails[0]?.origin}
            </p>
            <p className="font-Satoshi font-medium text-[#616161] lg:text-xl lg:font-normal lg:text-black">
              Total views : {productDetails[0]?.views}
            </p>
            <div className="flex items-center gap-4 text-xl text-[#333333] lg:text-3xl">
              <button onClick={decreaseCount}>-</button>
              <span className="w-8 text-center font-Satoshi text-4xl font-medium">
                {count}
              </span>
              <button onClick={increaseCount}>+</button>
            </div>
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  addToCart({ productDetails, count: count });
                }, 1000);
              }}
              disabled={loading}
              className="mb-4 flex h-[50px] w-[150px] items-center justify-center gap-2 rounded-sm bg-[#272727] text-[#FFFFFF] duration-300 hover:gap-4 lg:mb-0 lg:h-[60px] lg:w-[200px] lg:text-xl"
            >
              {!loading ? (
                <>
                  <p className="font-Inter font-medium">Add to cart</p>
                  <SmallRightArrow />
                </>
              ) : (
                <BeatLoader
                  color={color}
                  loading={loading}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              )}
            </button>
          </div>
          <div className="flex flex-col border-b border-[#333333] lg:border-x lg:px-4">
            <div className="flex items-center justify-between py-4 lg:h-[112px] lg:py-0">
              <p className="font-Satoshi font-medium lg:text-2xl">
                Description
              </p>
              <AngleDownIcon />
            </div>

            <div className="hidden pb-4 font-Satoshi text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tenetur maiores repellat, aliquid necessitatibus corrupti
              consectetur libero quae dolores aspernatur perferendis, officia,
              exercitationem a vitae. Quisquam hic animi eius qui! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nobis tenetur maiores
              repellat, aliquid necessitatibus corrupti consectetur libero quae
              dolores aspernatur perferendis, officia, exercitationem a vitae.
              Quisquam hic animi eius qui!
            </div>
          </div>
          <div className="flex flex-col border-b border-[#333333] lg:border-x lg:px-4">
            <div className="flex items-center justify-between py-4 lg:h-[112px] lg:py-0">
              <p className="font-Satoshi font-medium lg:text-2xl">Listings</p>
              <AngleDownIcon />
            </div>

            <div className="hidden pb-4 font-Satoshi text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex flex-col border-b border-[#333333] lg:border-x lg:px-4">
            <div className="flex items-center justify-between py-4 lg:h-[112px] lg:py-0">
              <p className="font-Satoshi font-medium lg:text-2xl">Status</p>
              <AngleDownIcon />
            </div>

            <div className="hidden pb-4 font-Satoshi text-black">
              GI: Available
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-h-20 flex h-14 w-full items-center justify-between rounded-lg px-4 shadow-2xl shadow-[#0000001A]">
        <p className="font-Satoshi text-black lg:text-xl lg:text-[#333333]">
          Explore more from this collection
        </p>
        {/* <button className="flex items-center gap-2 lg:hidden">
          <p className="font-Satoshi text-black">Sort by</p>
          <AngleDownIcon />
        </button> */}
      </div>

      <div className="flex gap-4 overflow-x-scroll pb-4">
        <SuggestedProductCard />
        <SuggestedProductCard />
      </div>
    </motion.div>
  );
};

export default ProductDetails;
