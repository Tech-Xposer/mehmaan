import React from "react";
import { useRouter } from "next/navigation";
import { useMenu } from "@/contexts/MenuContext"; // Import the useMenu hook

const CheckoutButton = () => {
  const {  toggleMenu } = useMenu();
  const router = useRouter();
  return (
    <button
      className="text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-3 py-2 border-solid rounded-md hover:bg-[#F4BE39] hover:text-white transition duration-200 fixed bottom-10 right-10 z-50 text-3xl lg:text-3xl "
      onClick={() => {
        toggleMenu();
        router.push("/checkout");
      }}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
