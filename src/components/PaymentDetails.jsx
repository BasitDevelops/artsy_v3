import React, { useContext, useState } from "react";
import { LockIcon } from "../assets/icons";
import metamask from "../assets/images/MetaMask.png";
import coinbase from "../assets/images/Coinbase.png";
import walletConnect from "../assets/images/WalletConnect.png";
import phantom from "../assets/images/Phantom.png";
import { motion } from "framer-motion";
import CartDetails from "./CartDetails";
import { useNavigate } from "react-router";
import BeatLoader from "react-spinners/BeatLoader";
import CartContext from "../CartContext";

const PaymentDetails = ({ setTab }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const { clearCart } = useContext(CartContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <div className="flex justify-between">
        <p className="font-Satoshi text-lg font-medium text-[#292929] lg:text-2xl">
          Payment method
        </p>
        <div className="flex items-center gap-2">
          <LockIcon />
          <p className="font-Satoshi text-lg">Secure server</p>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex w-full flex-col gap-8 rounded-lg border-[#00000040] lg:w-1/2 lg:border lg:p-4">
          <div className="flex gap-4">
            <input type="radio" />
            <div className="flex w-full items-center justify-between">
              <h3 className="font-Satoshi font-medium text-[#292929] lg:text-xl">
                Select your wallet
              </h3>
              <div className="flex items-center gap-2">
                <button>
                  <img src={metamask} />
                </button>
                <button>
                  <img src={coinbase} />
                </button>
                <button>
                  <img src={walletConnect} />
                </button>
                <button>
                  <img src={phantom} />
                </button>
              </div>
            </div>
          </div>
          <p className="ml-8 font-Satoshi text-xs font-normal text-[#747474] lg:text-base">
            Connect with one of our available wallet providers or add and
            connect a new wallet.
          </p>

          <div>
            <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
              Wallet type
            </p>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
            />
          </div>
          <div>
            <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
              Key
            </p>
            <input
              type="text"
              className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
            />
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="w-full">
              <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
                Expiry date
              </p>
              <input
                type="text"
                className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
              />
            </div>
            <div className="w-full">
              <p className="font-Satoshi text-base text-[#888888] lg:text-xl">
                CVV
              </p>
              <input
                type="text"
                className="mt-2 h-10 w-full rounded-lg border-[0.5px] border-[#747474] bg-[#F2F2F2] px-4 font-Satoshi text-[#888888] lg:h-[50px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p className="font-Satoshi text-xs font-normal text-[#747474] lg:text-base">
              Save my wallet details & information for future transactions
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden w-1/2 lg:block"
        >
          <h3 className="py-3 font-Satoshi text-2xl font-medium text-[#292929]">
            Payment Summary
          </h3>
          <div className="border-t-[0.3px] border-[#747474] py-5">
            <p className="font-Satoshi text-xl font-normal text-[#292929]">
              Metamask wallet : 002345KJi90pzzz3
            </p>
            <p className="font-Satoshi text-lg font-normal text-[#616161]">
              Actively linked to Yaba, Lagos Nigeria.
            </p>
          </div>
          <div className="border-t-[0.3px] border-[#747474] py-5">
            <p className="font-Satoshi text-lg font-normal text-[#616161]">
              Expected arrival date: Between 22nd September and 26th September
              20222
            </p>
          </div>
          <div className="border-t-[0.3px] border-[#747474] py-5">
            <CartDetails />
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              clearCart();
              navigate("/success");
            }, 2000);
          }}
          className="mt-8 h-[50px] w-full rounded-md bg-[#272727] font-Satoshi font-medium text-white lg:h-[65px] lg:w-[48.7%] lg:text-xl"
        >
          {!loading ? (
            "Confirm"
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
        <button
          onClick={() => setTab("shipping-details")}
          className="font-Satoshi text-base font-medium underline underline-offset-[5px] lg:w-[48.7%] lg:text-xl"
        >
          Back
        </button>
      </div>
    </motion.div>
  );
};

export default PaymentDetails;
