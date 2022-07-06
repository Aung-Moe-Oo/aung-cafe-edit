import Head from "next/head";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { data } from "../data";
// import CartProvider from "../store/CartProvider";

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Aung Cafe</title>
      </Head>
      <Slider />
      <Products products={products} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const products = data;
  return {
    props: { products },
  };
};
