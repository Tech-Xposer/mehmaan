import { MenuProvider } from "@/contexts/MenuContext";
import ClientLayout from "./ClientLayout.js";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Milane - Incredible and Delicious Food",
  description:
    "Discover Milane, a restaurant offering incredible and delicious food crafted with the finest ingredients. Savor a dining experience that will leave you wanting more.",
  keywords: [
    "Milane",
    "restaurant",
    "incredible food",
    "delicious food",
    "fine dining",
    "gourmet",
    "culinary experience",
    "food lovers"
  ],
  author: "Milane Restaurant",
  link: [{ rel: "canonical", href: "https://www.milane.com" }],

  twitter: {
    card: "summary_large_image",
    title: "Milane - Incredible and Delicious Food",
    description:
      "Indulge in delicious food at Milane, where every dish is crafted with passion and expertise.",
    images: [
      {
        url: "/assets/images/image.png",
        alt: "Milane Restaurant"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="loaded">
        <MenuProvider>
          <ClientLayout>{children}</ClientLayout>
        </MenuProvider>
      </body>
    </html>
  );
}
