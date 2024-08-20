import { useOutletContext } from "react-router-dom";
import styles from "./ShopPage.module.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function ShopPage() {
  const { storeData, setStoreData } = useOutletContext();

  useEffect(() => {
    setStoreData(JSON.parse(localStorage.getItem("storageData")));
  }, []);

  return (
    <>
      <h1>Items</h1>
      {storeData &&
        storeData.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imgUrl={product.image}
            />
          );
        })}
    </>
  );
}
