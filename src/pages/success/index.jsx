import React from "react";
import image from "../../assets/images/success.png";
import { motion } from "framer-motion";

const Success = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-fit flex-col items-center gap-4 px-4"
    >
      <div className="absolute left-0 top-0 hidden lg:block">
        <svg
          width="467"
          height="565"
          viewBox="0 0 467 565"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="154.604"
            cy="241.433"
            r="234.048"
            stroke="url(#paint0_linear_43_154)"
            stroke-opacity="0.49"
            stroke-width="28.7763"
          />
          <circle
            cx="154.605"
            cy="252.943"
            r="304.07"
            stroke="url(#paint1_linear_43_154)"
            stroke-width="15.3474"
          />
          <defs>
            <linearGradient
              id="paint0_linear_43_154"
              x1="-201.263"
              y1="-244.887"
              x2="487.451"
              y2="854.369"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C05609" />
              <stop offset="1" stop-color="#C05609" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_43_154"
              x1="154.605"
              y1="-58.8003"
              x2="154.605"
              y2="564.687"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006CA2" />
              <stop offset="1" stop-color="#006CA2" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="block lg:hidden">
        <div className="absolute left-0">
          <svg
            width="137"
            height="240"
            viewBox="0 0 137 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_427_329)">
              <ellipse cx="18" cy="120" rx="39" ry="40" fill="#006CA2" />
            </g>
            <defs>
              <filter
                id="filter0_f_427_329"
                x="-101"
                y="0"
                width="238"
                height="240"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="40"
                  result="effect1_foregroundBlur_427_329"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute right-28 top-0">
          <svg
            width="210"
            height="212"
            viewBox="0 0 210 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_427_327)">
              <ellipse cx="105" cy="106" rx="45" ry="46" fill="#9B62EC" />
            </g>
            <defs>
              <filter
                id="filter0_f_427_327"
                x="0"
                y="0"
                width="210"
                height="212"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="30"
                  result="effect1_foregroundBlur_427_327"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-1/3">
          <svg
            width="195"
            height="252"
            viewBox="0 0 195 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_427_328)">
              <ellipse cx="134.5" cy="126" rx="64.5" ry="56" fill="#E27625" />
            </g>
            <defs>
              <filter
                id="filter0_f_427_328"
                x="0"
                y="0"
                width="269"
                height="252"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="35"
                  result="effect1_foregroundBlur_427_328"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <img src={image} />
      <h2 className="text-center font-Satoshi text-xl font-medium lg:text-3xl">
        Hey Art Lover, thank you for your purchase.
      </h2>
      <p className="text-center font-Satoshi lg:text-xl">
        You are amazing. Cheers to being{" "}
        <span className="font-medium text-[#4693ED]">ARTSY!</span>
      </p>
    </motion.div>
  );
};

export default Success;
