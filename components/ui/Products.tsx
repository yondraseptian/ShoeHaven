"use client";
import React, { use, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CardItem from "./CardItem";
import { fetchProducts } from "@/lib/actions/product.action";
import { motion } from "framer-motion";

const Products = () => {
  const [products, setProducts] = useState([] as Array<any>);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as string | null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data) {
          setProducts(data);
        } else {
          setError("No products found");
        }
      } catch (err) {
        setError("Error fetching products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  console.log(products);
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10 text-3xl font-semibold">
      <h1 className="mb-5">Products</h1>
      <Carousel className="container w-full  max-w-sm md:max-w-4xl xl:max-w-full xl:px-36 px-5">
        <CarouselContent className="-ml-1">
          {products.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 lg:pl-3 md:basis-1/3 xl:basis-1/4"
            >
              <motion.div
                className="p-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <CardItem
                  img={item.ImageUrl}
                  name={item.Name}
                  price={item.Price}
                  tags={item.Tags}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Products;
