"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import {
  categories as dumpCategories,
  products as dumpProducts,
} from "@/utils/dump-data";
const maxResult = 3;

const Category = ({ params }: { params: { slug: string } }) => {
  const category = dumpCategories.find(
    (category) => category.label === params.slug
  );
  const products = dumpProducts.filter(
    (product) => product.categoryId === category?.id
  );

  const searchParams = useSearchParams();
  const page = searchParams.get("pageIndex") || "1";
  const [pageIndex, setPageIndex] = useState(parseInt(page, 10));

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const paginatedProducts = products.slice(
    (pageIndex - 1) * maxResult,
    pageIndex * maxResult
  );

  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.label}
          </div>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {paginatedProducts?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* products grid end */}

        {/* PAGINATION BUTTONS START */}
        {products.length > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">
              {`${pageIndex} of ${Math.ceil(products.length / maxResult)}`}`
            </span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === Math.ceil(products.length / maxResult)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Category;
