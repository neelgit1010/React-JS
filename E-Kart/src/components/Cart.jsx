
const Cart = ({ cart, setCart }) => {
  return (
    <center>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3 my-5" style={{maxWidth: "700px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.img} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <button className="btn btn-primary mx-3">₹ {item.price}</button>
                  <button className="btn btn-warning fw-bold">Buy now</button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center">Cart is Empty</h1>
      )}
      <button className="btn btn-info fw-bold my-5">Check out</button>
      <button className="btn btn-danger mx-3 fw-bold" onClick={() => setCart([])} >Clear Cart</button>
    </center>
  );
};

export default Cart;
