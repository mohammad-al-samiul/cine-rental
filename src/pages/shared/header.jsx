import logo from "./../../assets/logo.svg";
import ring from "./../../assets/ring.svg";
import moon from "./../../assets/icons/moon.svg";
import cart from "./../../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "../cartDetails/cartDetails";
import { MovieContext } from "../../context";
export default function Header() {
  const [openCartModal, setOpenCartModal] = useState(false);
  const { carts } = useContext(MovieContext);
  const handleCartOpenModal = () => {
    setOpenCartModal(true);
  };

  const handleCartCloseModal = () => {
    setOpenCartModal(false);
  };

  return (
    <header>
      {openCartModal && <CartDetails onClose={handleCartCloseModal} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartOpenModal}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="20" height="20" alt="" />
              <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                {carts.length > 0 ? carts.length : "0"}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
