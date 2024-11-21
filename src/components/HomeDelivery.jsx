"use client";
import { useState, useEffect } from "react";
import menu from "../data/menu.js";
import { useRouter } from "next/navigation.js";
import { toast } from "react-toastify";

const HomeDelivery = ({ toggleMenu }) => {
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const saveCartToLocalStorage = (newCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const addToCart = (menuItem, itemQuantity) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.name === menuItem.name
      );

      let updatedCartItems;
      if (existingItem) {
        // Update the quantity if the item already exists
        updatedCartItems = prevCartItems.map((item) =>
          item.name === menuItem.name
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        );
      } else {
        // Add new item to the cart
        const cartItem = {
          name: menuItem.name,
          price: menuItem.price,
          quantity: itemQuantity
        };
        updatedCartItems = [...prevCartItems, cartItem];
      }

      // Save updated cart to localStorage
      saveCartToLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  };

  return (
    <div className="backdrop-blur-md inset-0 fixed z-10 bg-black/20">
      <div className="flex flex-col justify-center items-center h-screen w-screen p-20 gap-10">
        <div className="flex justify-around h-auto items-center w-full">
          <h1 className="text-8xl text-[#F4BE39] font-londrina text-center">
            Menu
          </h1>
          <button
            className="h-fit text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-2 py-1 border-solid rounded-md hover:bg-[#F4BE39] hover:text-black transition duration-200"
            onClick={toggleMenu}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col space-y-8 overflow-auto p-5">
          {menu &&
            menu.map((categoryItem, index) => (
              <div key={index} className="flex flex-col space-y-8">
                <span className="text-4xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
                  {categoryItem.category}
                </span>
                <p className="font-quicksand text-xl text-white mb-4">
                  {categoryItem.description}
                </p>

                <div
                  className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3"
                  key={index}
                >
                  {categoryItem.items &&
                    categoryItem.items.map((menuItem, dishIndex) => (
                      <DishCard
                        key={dishIndex}
                        menuItem={menuItem}
                        addToCart={addToCart} // Pass addToCart here
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>

        <button
          className="text-[#F4BE39] font-quicksand border-2 border-[#F4BE39] px-2 py-1 border-solid rounded-md hover:bg-[#F4BE39] hover:text-white transition duration-200"
          onClick={() => {
            document.body.style.overflow = "";
            router.push("/checkout");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

const DishCard = ({ menuItem }) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  // Retrieve initial quantity from localStorage if present
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = storedCartItems.find(
      (item) => item.name === menuItem.name
    );
    if (existingItem) {
      setItemQuantity(existingItem.quantity);
    }
  }, [menuItem.name]);

  // Save the cart items to localStorage in the desired array format
  const saveCartToLocalStorage = (newQuantity) => {
    let storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Find if the current menuItem already exists in the cart
    const existingItemIndex = storedCartItems.findIndex(
      (item) => item.name === menuItem.name
    );

    if (newQuantity > 0) {
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        storedCartItems[existingItemIndex].quantity = newQuantity;
      } else {
        // Add new item to the cart
        storedCartItems.push({
          name: menuItem.name,
          price: menuItem.price,
          quantity: newQuantity
        });
      }
    } else if (existingItemIndex > -1) {
      // Remove the item if quantity is 0
      storedCartItems.splice(existingItemIndex, 1);
    }

    localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
  };

  const handleQuantityDecrement = () => {
    if (itemQuantity > 0) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      saveCartToLocalStorage(newQuantity);

      if (newQuantity === 0) {
        toast.success(`${menuItem.name} removed from cart`);
      }
    }
  };

  const handleQuantityIncrement = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    saveCartToLocalStorage(newQuantity);
    toast.success(`${menuItem.name} added to cart`);
  };

  return (
    <div className="flex gap-5 overflow-auto p-5 w-full items-center">
      <div className="flex flex-col items-start gap-3">
        <span className="text-4xl text-[#F4BE39] font-londrina block mb-2 cursor-pointer">
          {menuItem.name}
        </span>
        <p className="font-quicksand text-xl text-white mb-4">
          {menuItem.description}
        </p>
        <span className="font-quicksand text-2xl text-white">
          {menuItem.price} €
        </span>
        <div className="flex gap-10 items-center">
          <div className="flex gap-5 items-center">
            <button
              onClick={handleQuantityDecrement}
              className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
            >
              -
            </button>
            <p className="text-2xl text-white font-quicksand">{itemQuantity}</p>

            <button
              onClick={handleQuantityIncrement}
              className="bg-[#E4C590] text-black font-bold font-quicksand px-5 mt-auto hover:bg-[#e1b15f] transition duration-200"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDelivery;
