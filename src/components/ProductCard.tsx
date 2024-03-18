import { Product } from "@/utils/dump-data";
import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data }: { data: Product }) => {
  return (
    <Link
      href={`/shop/product/${data.label}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={500} height={500} src={data.images[0]} alt={data.label} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{data.label}</h2>
        {/* HERE WE WORK ALSO WITH THE SOLDED PRICE VERIFY WITH ORIGINAL PROJECT */}
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">{data.price}dt</p>
          {data.price && (
            <>
              <p className="text-base  font-medium line-through">
                {data.price}dt
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(data.price, data.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
