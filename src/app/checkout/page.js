"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderType, setOrderType] = useState("takeaway");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    zipcode: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedOrders = localStorage.getItem("cartItems");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const getOrderType = (type) => {
    switch (type) {
      case "takeaway":
        return "À Emporter";
      case "home-delivery":
        return "Livraison à domicile";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, phone, email, address, zipcode } = formData;

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    setError(""); // Clear error message

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone,
          orders,
          email,
          address,
          zipcode,
          orderType: getOrderType(orderType)
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Error sending email. Please try again."
        );
      }

      localStorage.clear();
      toast.success("Your order has been placed!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = orders
    .reduce((total, order) => total + (order.quantity || 1) * order.price, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center p-5 text-white mt-[100px] md:h-screen w-full ">
      <h2 className="text-5xl mb-4 text-[#F4BE39] font-londrina">Checkout</h2>

      {orders.length ? (
        <div>
          <div className="border border-[#F4BE39] p-4 mb-6">
            <h3 className="text-3xl font-semibold text-[#F4BE39] font-londrina">
              Your orders:
            </h3>
            <table className="table-auto w-full mb-6">
              <thead>
                <tr>
                  <th className="text-left p-2 border-b border-[#F4BE39]">
                    Product
                  </th>
                  <th className="text-left p-2 border-b border-[#F4BE39]">
                    Quantity
                  </th>
                  <th className="text-left p-2 border-b border-[#F4BE39]">
                    Price (€)
                  </th>
                  <th className="text-left p-2 border-b border-[#F4BE39]">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  console.log(order),
                  <tr key={index} className="border-b border-[#F4BE39]">
                    <td className="p-2">{order.name}</td>
                    <td className="p-2">{order.quantity || 1}</td>
                    <td className="p-2">
                      {( order.price * (order.quantity || 1)).toFixed(2)} €
                    </td>
                    {order.option && (
                      <td colSpan="3" className="p-2">
                        {order.option}
                      </td>
                    )}
                    {order.selectedItems && (
                      <td colSpan="3" className="p-2">
                        <ul>
                          {Object.keys(order.selectedItems).map((key) => (
                            <li key={key}>
                              {key} : {order.selectedItems[key]}
                            </li>
                          ))}
                        </ul>
                      </td>
                    )}
                  </tr>
                ))}

                <tr>
                  <td colSpan="2" className="text-right p-2 font-semibold">
                    Total:
                  </td>
                  <td className="p-2 font-semibold">{totalPrice} €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 items-center m-5">
            <div>
              {" "}
              <img
                src={"/assets/images/discount.gif"}
                alt="takeaway"
                className="w-[100px] h-8"
              />
              <span
                onClick={() => setOrderType("takeaway")}
                className={`cursor-pointer relative font-londrina ${
                  orderType === "takeaway"
                    ? "bg-[#F4BE39] p-2 text-black "
                    : "text-white"
                }`}
              >
                À Emporter
              </span>
            </div>
            <span
              onClick={() => setOrderType("home-delivery")}
              className={`cursor-pointer font-londrina ${
                orderType === "home-delivery"
                  ? "bg-[#F4BE39] p-2 text-black "
                  : "text-white"
              }`}
            >
              Livraison à domicile
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                required
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                required
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                required
                placeholder="Email"
              />
            </div>

            {orderType === "home-delivery" && (
              <>
                <div>
                  <label htmlFor="address" className="block text-lg">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                    required
                    placeholder="Your Address"
                  />
                </div>
                <div>
                  <label htmlFor="zipcode" className="block text-lg">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className="w-full p-2 border border-[#F4BE39] rounded bg-transparent text-white"
                    required
                    placeholder="Your Zip Code"
                  />
                </div>
              </>
            )}
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#F4BE39] text-black p-2 rounded mt-4 hover:bg-yellow-600 transition duration-200"
              disabled={loading}
            >
              {loading ? "Placing..." : "Passer commande"}
            </button>
          </form>
          <div className="mt-4 text-lg">
            <strong>Total Price: </strong> {totalPrice} €
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              setOrders([]);
              toast.success("All orders cleared!");
              router.push("/");
            }}
            className="w-full bg-[#F4BE39] text-black p-2 rounded mt-4 hover:bg-yellow-600 transition duration-200"
          >
            Ordre clairs
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-full gap-10">
          <span className="text-center text-5xl font-semibold text-[#F4BE39]">
            Your cart is empty!
          </span>
          <Link
            href="/"
            className="text-3xl bg-[#F4BE39] p-4 rounded text-black hover:bg-yellow-600 transition duration-200"
          >
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
