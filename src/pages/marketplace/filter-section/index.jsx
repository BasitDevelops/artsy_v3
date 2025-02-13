import React, { useState } from "react";
import { AngleDownIcon, FilterBorderSvg } from "../../../assets/icons";
import { MdFilterList } from "react-icons/md";

const FilterSection = ({ handlePriceFilter, setFilterValue }) => {
  const infinity = 1.797693134862315e308 * 1.001;

  const categories = [
    {
      label: "Editorials",
    },
    {
      label: "Fashion",
    },
    {
      label: "Optics",
    },
    {
      label: "Art & Museum",
    },
    {
      label: "Nature",
    },
  ];

  const priceRanges = [
    {
      label: "All",
      min: 0,
      max: infinity,
    },
    {
      label: "Below $100.00",
      min: 0,
      max: 100,
    },
    {
      label: "$100.00 - $150.00",
      min: 100,
      max: 150,
    },
    {
      label: "$150.00 - $200.00",
      min: 150,
      max: 200,
    },
    {
      label: "Above $200.00",
      min: 200,
      max: infinity,
    },
  ];

  const [displayCategoryOptions, setDisplayCategoryOptions] = useState(false);
  const [displayPriceOptions, setDisplayPriceOptions] = useState(false);

  const [priceRangeValue, setPriceRangeValue] = useState("All");

  const toggleCategoryOptions = () =>
    setDisplayCategoryOptions((prev) => !prev);
  const togglePriceOptions = () => setDisplayPriceOptions((prev) => !prev);

  return (
    <div>
      <div className="flex items-center gap-2">
        <MdFilterList size={30} color="#333333" />
        <p className="font-Satoshi text-2xl font-medium text-[#333333]">
          Filter
        </p>
      </div>
      <div className="mt-2 hidden xl:flex">
        <FilterBorderSvg />
      </div>

      <div className="mt-8">
        <button
          onClick={toggleCategoryOptions}
          className="flex w-full items-center justify-between gap-2"
        >
          <p className="font-Satoshi text-xl font-medium text-[#333333]">
            By category
          </p>
          <div
            className={`${displayCategoryOptions && "rotate-180"} duration-300`}
          >
            <AngleDownIcon />
          </div>
        </button>

        <ul
          className={`${displayCategoryOptions ? "h-full opacity-100" : "absolute left-[-500px] h-0 opacity-0"} mt-4 flex flex-col gap-4 duration-300`}
        >
          {categories.map((category) => (
            <li key={category.label} className="flex items-center gap-3">
              <input type="checkbox" />
              <p className="font-Satoshi text-[#292929]">{category.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={togglePriceOptions}
          className="flex w-full items-center justify-between gap-2"
        >
          <p className="font-Satoshi text-xl font-medium text-[#333333]">
            By price
          </p>
          <div
            className={`${displayPriceOptions && "rotate-180"} duration-300`}
          >
            <AngleDownIcon />
          </div>
        </button>

        <ul
          className={`${displayPriceOptions ? "h-full opacity-100" : "absolute left-[-500px] h-0 opacity-0"} mt-4 flex flex-col gap-4 duration-300`}
        >
          {priceRanges.map((priceRange) => (
            <li key={priceRange.label}>
              <button
                onClick={() => {
                  handlePriceFilter(priceRange.min, priceRange.max);
                  setPriceRangeValue(priceRange.label);
                  setFilterValue(priceRange.label);
                }}
                className={`${priceRange.label === priceRangeValue && "border-b-2 border-[#292929]"} h-[30px] w-fit font-Satoshi text-[#292929]`}
              >
                {priceRange.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
