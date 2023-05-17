import { ProductsProps, ProductItemProps } from "./types";
import ProductItem from "./productItem";

const ProductList = ({ data }: { data: ProductsProps }) => (
  <div className="px-2 md:px-8 flex flex-col items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
    <div className="mb-7">
      <h2 className="my-4 text-4xl font-extrabold dark:text-white">Products</h2>
      <div className="mb-32 grid gap-3 lg:mb-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center lg:text-left">
        {data?.products?.map((item: ProductItemProps, i: number) => (
          <ProductItem key={`${i}-${item}`} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default ProductList;
