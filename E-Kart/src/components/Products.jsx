import { useEffect, useState } from "react";
import Card from "./Card";
import { items } from "./Data.js";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ navItem, search, cart, setCart }) => {
  const [filteredData, setFilteredData] = useState(items);

  useEffect(() => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredItems);
  }, [search]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <div className="container d-flex justify-content-center flex-wrap">
        {navItem === "" || navItem === undefined
          ? filteredData.map((item) => (
              <Card key={item.id} items={item} cart={cart} setCart={setCart} />
            ))
          : /\d/.test(navItem) // to check if the navItem is a number
          ? filteredData
              .filter((item) => navItem?.split("=")[1] >= item.price)
              .map((item) => (
                <Card
                  key={item.id}
                  items={item}
                  cart={cart}
                  setCart={setCart}
                />
              ))
          : filteredData // if the navItem is a string
              .filter((item) => item.category === navItem?.toLowerCase())
              .map((item) => (
                <Card
                  key={item.id}
                  items={item}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
      </div>
    </>
  );
};

export default Products;
