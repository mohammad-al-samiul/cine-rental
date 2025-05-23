import React, { useContext } from "react";
import { MovieContext } from "../../context";
import { getImageUrl } from "../../utils/movie-imageUrl";
import remove from "../../assets/delete.svg";
import Checkout from "../../assets/icons/checkout.svg";
import { toast } from "react-toastify";

export default function CartDetails({ onClose }) {
  const { state, dispatch } = useContext(MovieContext);

  const handleDeleteCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    toast.success(`${item.title} removed from the cart`);
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50  backdrop-blur-sm bg-black/60">
      <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white dark:bg-[#12141D]  shadow-md  rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {state?.carts?.length === 0 && (
              <p className="text-3xl text-center">Cart is empty</p>
            )}
            {state?.carts?.map((cart, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                <div className="flex items-center gap-4">
                  <img
                    className="rounded overflow-hidden"
                    src={getImageUrl(cart.cover)}
                    alt={cart.title}
                    width={"50px"}
                    height={"50px"}
                  />
                  <div>
                    <h3 className="text-base md:text-xl font-bold">
                      {" "}
                      {cart.title}
                    </h3>
                    <p className="max-md:text-xs text-[#575A6E]">
                      {cart.genre}
                    </p>
                    <span className="max-md:text-xs">${cart.price}</span>
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <button
                    onClick={() => handleDeleteCart(cart)}
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                  >
                    <img src={remove} className="w-5 h-5" alt="delete" />
                    <span className="max-md:hidden">Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={Checkout} width="24" height="24" alt="checkout" />
              <span>Checkout</span>
            </a>
            <a
              onClick={onClose}
              className="border border-[#74766F] dark:text-gray-200 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F]  font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
