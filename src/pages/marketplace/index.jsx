import SearchBar from "../../components/SearchBar";
import { AngleDownIcon } from "../../assets/icons";
import FilterSection from "./filter-section";
import ProductCard from "../../components/ProductCard";
import NewsLetter from "../../components/common/NewsLetter";
import Footer from "../../components/common/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MarketPlace = () => {
  const [marketPlaceProducts, setMarketPlaceProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch(
      "https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/ad3985705a52397ddd061e6fd342e7d1b1fe05bd/products.json",
    )
      .then((response) => response.json())
      .then((data) => data.products);

    return data;
  };

  useEffect(() => {
    (async function () {
      const products = await fetchProducts();
      setMarketPlaceProducts(products);
    })();
  }, []);

  const handleSearch = async (value) => {
    setSearchValue(value.toLowerCase());
    const searchedProducts = marketPlaceProducts.filter((product) =>
      product.name.includes(searchValue),
    );
    setSearchedProducts(searchedProducts);
  };

  const handlePriceFilter = async (min, max) => {
    const products = await fetchProducts();
    const filteredProducts = products.filter(
      (product) => product.price.usd >= min && product.price.usd <= max,
    );
    setMarketPlaceProducts(filteredProducts);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 lg:gap-16"
    >
      <div className="flex flex-col gap-8 px-4 xl:px-16">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div className="w-full lg:w-[20%]">
            <SearchBar onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div className="flex h-12 w-full items-center justify-between rounded-xl px-4 shadow-2xl shadow-[#0000001A] lg:h-20 lg:w-[80%]">
            <p className="font-Satoshi text-base font-normal text-black lg:text-xl lg:text-[#333333]">
              See 1-{marketPlaceProducts.length} of {marketPlaceProducts.length}{" "}
              results
            </p>
            <button className="flex items-center gap-2 lg:hidden">
              <p className="font-Satoshi text-base text-black">Sort by</p>
              <AngleDownIcon />
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="hidden w-[20%] lg:flex">
            <FilterSection handlePriceFilter={handlePriceFilter} />
          </div>
          {marketPlaceProducts.length > 0 && (
            <div className="grid w-full grid-cols-1 justify-items-center gap-y-8 md:grid-cols-3 lg:w-[80%]">
              {!searchValue
                ? marketPlaceProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      img={product.url}
                      title={product.name}
                      price={product.price.usd}
                    />
                  ))
                : marketPlaceProducts
                    .filter((product) => product.name.includes(searchValue))
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        img={product.url}
                        title={product.name}
                        price={product.price.usd}
                      />
                    ))}
            </div>
          )}
          <div className="mx-auto mt-8">
            {marketPlaceProducts.length < 1 && (
              <p className="text-xl">No results found...</p>
            )}
            {/* {searchValue && searchedProducts.length < 1 && (
              <p className="mx-auto mt-8 text-xl">No results found...</p>
            )} */}
          </div>
        </div>
        {!searchValue && (
          <button className="mx-auto mt-8 h-[50px] w-[150px] rounded-lg border border-black font-Satoshi text-lg text-black duration-300 hover:bg-black hover:text-white lg:mt-16 lg:h-[60px] lg:w-[200px] lg:text-2xl lg:font-medium">
            See more
          </button>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </motion.div>
  );
};

export default MarketPlace;
