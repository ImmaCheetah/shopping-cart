import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import useChangeProductQuantity from "../../useChangeProductQuantity";

export default function AddToCart({ title, price, imgUrl, id }) {
  const [productQty, setProductQty] = useState(1);
  const { cart, setCart } = useOutletContext();

  // console.log('SHOP PAGE', cart)

  function handleClick() {
    console.log(cart)
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
            return product
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
      setProductQty(e.target.value);
    }
  }

  return (
    <div>
      <button onClick={decrementQty}>-</button>
      <label htmlFor="productQty">Qty</label>
      <input
        id="productQty"
        type="number"
        value={productQty}
        onChange={handleChange}
      />
      <button onClick={incrementQty}>+</button>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
