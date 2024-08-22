import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from './AddToCart.module.css'

export default function AddToCart({ title, price, imgUrl, id }) {
  const [productQty, setProductQty] = useState(1);
  const { cart, setCart } = useOutletContext();

  // console.log('SHOP PAGE', cart)

  function handleClick() {
    console.log(cart);
    if (!isInArray(cart)) {
      setCart((prevCart) => {
        return [
          ...prevCart,
          {
            id,
            title,
            price,
            imgUrl,
            productQty,
            totalPrice: productQty * price,
          },
        ];
      });
    } else {
      setCart((prevCart) => {
        return prevCart.map((product) => {
          if (product.title === title) {
            return {
              ...product,
              productQty: product.productQty + productQty,
            };
          } else {
            return product;
          }
        });
      });
    }

    setProductQty(1);
  }

  function isInArray(array) {
    return array.some((product) => product.title === title);
  }

  function incrementQty() {
    if (productQty >= 99) {
      return;
    }
    setProductQty(productQty + 1);
  }

  function decrementQty() {
    if (productQty <= 1) {
      return;
    }

    setProductQty((prevQty) => {
      return prevQty - 1;
    });
  }

  function handleChange(e) {
    if (productQty > 99) {
      setProductQty(99);
    } else {
      setProductQty(parseInt(e.target.value));
    }
  }

  return (
    <div className={styles.addToCartDiv}>
      <label htmlFor="productQty"></label>
      <button className={styles.changeQtyBtn} onClick={decrementQty}>-</button>
      <input
        className={styles.qtyInput}
        id="productQty"
        data-testid="qtyInput"
        type="number"
        min={1}
        max={99}
        value={productQty}
        onChange={handleChange}
      />
      <button className={styles.changeQtyBtn} onClick={incrementQty}>+</button>
      <button className={styles.addToCartBtn} onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
