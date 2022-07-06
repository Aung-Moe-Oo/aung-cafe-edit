// import { useContext } from "react";
// import CartContext from "../store/Cart-Context";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import Image from "next/image";
import ProductForm from "./ProductForm";
import Link from "next/link";

const SingleProduct = (props) => {
  // const cartCtx = useContext(CartContext);
  const dispatch = useDispatch();
  const onAddToCartHandler = (quantity) => {
    dispatch(
      addProduct({
        id: props.id,
        name: props.name,
        quantity: quantity,
        price: props.price,
      })
    );
  };

  return (
    <div className="relative flex items-center flex-col" key={props.id}>
      <Link passhref="true" key={props.id} href={`/products/${props.name}`}>
        <Image
          src={props.img}
          alt={props.name}
          width={250}
          height={250}
          className="rounded-md cursor-pointer"
        />
      </Link>
      <div className="flex flex-row justify-between w-full pb-4 pt-4">
        <div className="flex flex-col flex-1 pl-2">
          <h1 className="font-bold text-xl capitalize">{props.name}</h1>
          <p className="font-bold text-xl">$ {props.price}</p>
        </div>
        <ProductForm AddToCart={onAddToCartHandler} />
      </div>
    </div>
  );
};

export default SingleProduct;
