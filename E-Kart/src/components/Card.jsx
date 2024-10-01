import { Link } from "react-router-dom";
import { Slide, toast } from "react-toastify";

const Card = ({ items, cart, setCart }) => {
  const addToCart = (id, title, img, desc, price) => {
    const item = { id, title, img, desc, price };
    setCart([...cart, item]);
    console.log(cart);
    toast('🦄 Added to Cart!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <Link to={`/product/${items.id}`}>
        {" "}
        <img src={items.imgSrc} className="card-img-top" alt="..." />{" "}
      </Link>
      <div className="card-body">
        <h5 className="card-title">{items.title}</h5>
        <p className="card-text">{items.description}</p>
        <button className="btn btn-primary mx-3">₹ {items.price}</button>
        <button
          className="btn btn-warning"
          onClick={() =>
            addToCart(
              items.id,
              items.title,
              items.imgSrc,
              items.description,
              items.price
            )
          }
        >
          {" "}
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
