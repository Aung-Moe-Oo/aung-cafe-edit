import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductForm from "../../components/ProductForm";
import { data } from "../../data";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const ProductPage = ({ product }, props) => {
  // const cartCtx = useContext(CartContext);
  const dispatch = useDispatch();
  const onAddToCartHandler = (quantity) => {
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        quantity: quantity,
        price: product.price,
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-yellow-300 bg-opacity-30 z-0 lg:py-8 pb-4 overflow-hidden w-full  flex lg:flex-row flex-col flex-wrap">
        <div
          className="relative flex-1 flex items-center flex-col m-2"
          key={product.id}
        >
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-md p-32"
          />
        </div>
        <div className="flex-1 flex flex-col px-4">
          <h1 className="uppercase text-center font-bold text-3xl mb-2">
            {product.name}
          </h1>
          <p className="font-light text-lg mx-4 text-justify leading-normal">
            {product.desc}
          </p>
          <ProductForm AddToCart={onAddToCartHandler} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((product) => {
    return {
      params: { name: product.name },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};
