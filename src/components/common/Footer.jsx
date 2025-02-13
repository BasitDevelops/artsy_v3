import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router";
import { MdOutlineLocationOn, MdMailOutline } from "react-icons/md";

const Footer = () => {
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Marketplace",
      to: "/marketplace",
    },
    {
      label: "Auction",
      to: "/auctions",
    },
    {
      label: "Drop",
      to: "/drops",
    },
    {
      label: "Blog",
      to: "/blog",
    },
    {
      label: "Wallets",
      to: "/wallets",
    },
    {
      label: "Rates",
      to: "/rates",
    },
    {
      label: "High bids",
      to: "/high-bids",
    },
  ];

  return (
    <footer className="w-full px-4 lg:px-8">
      <div className="flex items-center gap-8">
        <div className="hidden w-[25%] justify-center lg:flex">
          <img src={logo} />
        </div>
        <ul className="hidden w-[50%] grid-cols-2 gap-8 px-20 lg:grid">
          {links.map((link) => (
            <li
              key={link.label}
              className="font-Satoshi text-2xl text-[#333333]"
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-col gap-2 lg:w-[25%]">
          <p className="flex font-Poppins text-xs font-light uppercase text-[#333333] lg:hidden">
            Reach Us
          </p>
          <div className="flex items-center gap-2">
            <div className="text-4xl lg:text-6xl">
              <MdMailOutline />
            </div>
            <p className="font-Satoshi text-xs text-[#333333] lg:text-xl">
              artsystudios@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-4xl lg:text-6xl">
              <MdOutlineLocationOn />
            </div>
            <p className="font-Satoshi text-xs text-[#333333] lg:text-xl">
              Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>

      <p className="font-Rubik mt-8 pb-4 text-center text-xs font-medium text-[#333333] lg:mt-16 lg:text-base">
        Artsystudios © 2022. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
