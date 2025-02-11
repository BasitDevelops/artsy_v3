import React from "react";
import NavBar from "./components/common/NavBar";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Marketplace from "./pages/marketplace";
import ProductDetails from "./components/ProductDetails";
import Auction from "./pages/auction";
import UpcomingDrops from "./pages/drops";
import Payment from "./pages/payment";
import { CartProvider } from "./CartContext";
import Success from "./pages/success";

const App = () => {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/product/:id" element={<ProductDetails />} />
          <Route path="/auctions" element={<Auction />} />
          <Route path="/drops" element={<UpcomingDrops />} />
          <Route path="/cart" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
