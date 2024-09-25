import React from "react";
import { Card, CardContent } from "./card";
import { array } from "zod";
import Image from "next/image";
import { Button } from "./button";

const CardItem = ({ img, name, price, tags } : cardItemProps) => {
  return (
    <div>
      <Card className="cursor-pointer border-none shadow-md bg-secondary">
        <CardContent className="flex flex-col aspect-square p-6">
          <img
            className="w-full h-full object-cover rounded-md"
            src={img}
            alt="image"
            width={300}
            height={300}
          />
          <div className="flex flex-col mt-4 text-start">
            <div className="flex space-x-2"> 
              {tags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <p className="text-sm font-normal">
                    #{tag}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="text-lg font-semibold">{name}</h2>
          </div>
          <div className="flex justify-between mt-4 text-start">
            <p>{`$${price}`}</p>
            <Button className="rounded-full bg-primary text-secondary w-24">
              Buy
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
