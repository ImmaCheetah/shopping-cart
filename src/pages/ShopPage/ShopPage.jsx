import styles from "./ShopPage.module.css";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import Card from "../../components/Card/Card";

export default function ShopPage() {
  const { storeData, setStoreData } = useOutletContext();

  useEffect(() => {
    setStoreData(JSON.parse(localStorage.getItem("storageData")));
  }, []);

  return (
    <>
    <div className={styles.shopDiv}>
      <h1 className={styles.shopTitle}>Our Products</h1>
      <div className={styles.itemsDiv}>
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
      </div>
    </div>
    </>
  );
}
