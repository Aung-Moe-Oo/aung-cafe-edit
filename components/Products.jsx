import SingleProduct from "./SingleProduct";

const Products = (props) => {
  return (
    <div className="bg-yellow-300 bg-opacity-30 z-0 lg:py-8 md:py-4 overflow-hidden">
      <div className="container mx-0 lg:mx-auto">
        <h1 className="text-center font-bold mt-8 md:mt-4 text-3xl pb-8">
          Featured Products
        </h1>
        <div className="flex flex-row flex-wrap justify-around relative z-10">
          {props.products.map((product) => (
            <SingleProduct
              key={product.id}
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
