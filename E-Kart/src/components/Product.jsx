import { items } from "./Data";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { Slide, toast } from "react-toastify";

const Product = ({ cart, setCart }) => {
  const { id } = useParams();
  const product = items.filter((item) => item.id == id);
  const addToCart = (id, title, img, desc, price) => {
    const item = { id, title, img, desc, price };
    setCart([...cart, item]);
    console.log(cart);
    toast("🦄 Added to Cart!", {
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
    <>
      <div>
        {items.map((item) => {
          if (item.id == id) {
            return (
              <div className="product-detail" key={item.id}>
                <img src={item.imgSrc} className="card-img-top" alt="..." />{" "}
                <div>
                  <h1 className="card-title">{item.title}</h1>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary mx-3">
                    ₹ {item.price}
                  </button>
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
          }
        })}
      </div>
      <hr />
      <h1 className="text-center">Related Products</h1>
      <div className="related-products">
        {product.length > 0 &&
          items
            .filter((item) => item.category == product[0].category)
            .map((item) => <Card key={item.id} items={item} />)}
      </div>
    </>
  );
};

export default Product;
