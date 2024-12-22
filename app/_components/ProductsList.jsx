"use client"
import Products from "@/components/ui/_mockData/Products";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import ProductCardItem from "./ProductCardItem";

function ProductsList() {
    const [productList,setProductList]=useState([]);

    useEffect(()=>{
        setProductList(Products)
    },[])
  return (
    <div>
        <h2 className="font-bold text-xl  flex justify-between items-center">Featured
        <span>
            <Button>View All</Button>
        </span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5">
            {productList.map((product , index)=>(
                <ProductCardItem product ={product} key={index}/>
            ))}
        </div>
    </div>
  )
}
export default ProductsList