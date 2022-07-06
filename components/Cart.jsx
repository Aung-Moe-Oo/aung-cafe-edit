// import { useContext } from "react";
// import CartContext from "../store/Cart-Context";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Cart = (props) => {
  // const cartCtx = useContext(CartContext);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalAmount = `$ ${cart.total.toFixed(2)}`;
  const hasItem = cart.products.length >= 1;

  const cartItems = (
    <ul>
      {cart.products.map((item) => {
        return (
          <div
            className="grid grid-flow-row grid-cols-2 gap-12 pb-4"
            key={item.name}
          >
            <h1 className="text-yellow-600 font-bold capitalize text-xl">
              {item.name}
            </h1>
            <div className="flex justify-between items-center text-xl">
              <span className="mr-4">$ {item.price}</span>
              <span className="">x</span>
              <span className="">{item.quantity}</span>
            </div>
          </div>
        );
      })}
    </ul>
  );
  return (
    <div className="bg-black bg-opacity-50 w-full h-screen">
      <div className="md:w-96 h-96 flex md:mx-auto mx-1 mt-3 flex-col items-center justify-around bg-white rounded-lg p-4 ">
        {cartItems}
        {!hasItem && (
          <p className="text-yellow-600 font-bold">No order here yet...</p>
        )}

        <div className="grid grid-flow-row grid-cols-2 gap-12 border-t-2  text-xl">
          <span className="text-yellow-600 font-bold">Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="">
          <button
            className="bg-yellow-600 rounded-lg py-2 px-4 text-white mr-4"
            onClick={props.showCartHandler}
          >
            Close
          </button>
          {hasItem && (
            <button className="bg-yellow-600 rounded-lg py-2 px-4 text-white">
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
