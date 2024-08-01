"use client";

import CountBear from "@/components/bear/count.bear";
import IncreaseBear from "@/components/bear/increase.bear";
import RemoveBear from "@/components/bear/remove.bear";
import AddProduct from "@/components/product/add.product";
import ListProduct from "@/components/product/list.product";
import TotalProduct from "@/components/product/total.product";
import { useCartStore } from "@/store/cart.store";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, []);

    return (
        <div>
            <h1>HomePage</h1>
            <CountBear />
            <div className="flex justify-between w-72">
                <IncreaseBear />
                <RemoveBear />
            </div>
            <hr />
            <AddProduct />
            <TotalProduct />
            <ListProduct />
        </div>
    );
};
export default HomePage;
