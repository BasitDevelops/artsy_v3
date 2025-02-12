import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import {
  BellIcon,
  CartIcon,
  ChatIcon,
  EllipsisIcon,
  SearchIcon,
  XmarkIcon,
} from "../../assets/icons";
import { NavLink, useLocation, useNavigate } from "react-router";
import CartContext from "../../CartContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
  ];

  const { cartItems } = useContext(CartContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNavBar = () => setIsNavOpen(true);
  const closeNavBar = () => setIsNavOpen(false);

  return (
    <nav className="flex items-center justify-between gap-4 p-4 lg:px-16 lg:py-8">
      <button onClick={openNavBar} className="flex lg:hidden">
        <EllipsisIcon />
      </button>

      {isNavOpen && (
        <div className="fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-white p-8">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" />
            <button onClick={closeNavBar}>
              <XmarkIcon />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-8">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeNavBar}
                className={`${link.to === pathname && "border-b-2"} h-8 w-fit border-[#292929] font-Satoshi text-2xl font-medium text-[#333333] hover:border-b-2`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button className="absolute bottom-16 right-8">
            <ChatIcon />
          </button>
        </div>
      )}

      <img src={logo} alt="logo" />
      <div className="hidden items-center gap-8 lg:flex">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={`${link.to === pathname && "border-b-2"} h-7 w-fit border-[#292929] font-Satoshi text-lg font-normal text-[#292929] duration-75 hover:border-b-2`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {/* <button>
          <SearchIcon />
        </button> */}
        <button onClick={() => navigate("/cart")}>
          <CartIcon circle={cartItems.length > 0} />
        </button>
        {/* <button className="hidden lg:flex">
          <BellIcon />
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
