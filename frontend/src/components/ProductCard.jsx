import React from "react";
import { ExternalLink } from "lucide-react";

function ProductCard({ title, price, image, seller, link, delivery }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
            {title}
          </h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-gray-900">₹{price}</span>
            <div className="flex items-center text-blue-600 hover:text-blue-800">
              <ExternalLink size={16} className="ml-1" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              Sold by <span className="font-medium">{seller}</span>
            </p>
            <p className="text-sm text-green-600 font-medium">
              Delivery by {delivery}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

function App() {
  const productData = {
    title:
      "Gytree She The People Coffee Mug Ceramic (250ml) Handcrafted Design Tea Cups Chip Resistant, with Handles Large Serving Coffee Cup (She The People)",
    price: "399",
    image: "https://m.media-amazon.com/images/I/51+o85n51WL.AC_UL320.jpg",
    seller: "Amazon",
    link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDc5NjkwMDcyOTQyMTc4OjE3NDIzNTM5OTM6c3BfYXRmOjMwMDUwMDY1NDIwODYzMjo6MDo6&url=%2FGytree-Ceramic-Handcrafted-Resistant-Handles%2Fdp%2FB0CWGMKJLQ%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.vOypjcVxoeRvAqqZXrK8km3Ds7nzo0YP8hIplQl2WDWWkV4JspzURClI3iVGj8y77NvcwCWMK6JebNahoM92Y_uHouQgeti4PwAPfbiY5sn0HnjvGzu_sIEJqfGxp_xPopVH5vAtrAmHTsyka2j6FxJGaNjSyJOn_Qb3NlK25Q6nT4g0tC2yVn2IPPDUw2VbZo8zRZrV6DWpwKPlYnXOChwhanOzPXOpBusitmkQVxQqES-WQtM0FDDPjxPiSZFUBD8xeW5w24Fi1ZpXG_Bq2C6x2NhRd_zg7b3twFeSoCs.Ln3LVesUnY2wHaGx7dGvX7sTlYGh7qDtRHCXjG-GbWc%26dib_tag%3Dse%26keywords%3Dcup%26qid%3D1742353992%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    delivery: "Sun, 23 Mar",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <ProductCard {...productData} />
    </div>
  );
}

export default App;
