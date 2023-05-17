import Image from "next/image";
import { ProductItemProps } from "./types";

const ProductItem = ({ item }: { item: ProductItemProps }) => (
  <div className="mb-7 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" className="flex justify-center">
      <Image
        className="p-8 rounded-t-lg"
        src={item.productPic}
        width={200}
        height={200}
        alt="product image"
      />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.productName}
        </h5>
      </a>
      <div className="mt-2 flex flex-wrap items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {item.productPrice}
        </span>
        <button
          type="button"
          className="text-white lg:border hover:border-black  focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-white hover:dark:bg-gray-300 dark:text-black"
        >
          Order
        </button>
      </div>
    </div>
  </div>
);

export default ProductItem;
