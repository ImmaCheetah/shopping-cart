import { useOutletContext } from "react-router-dom";
import styles from "./CartPage.module.css";
import CartItem from "../../components/CartItem/CartItem";
import Checkout from "../../components/Checkout/Checkout";

export default function CartPage() {
  const { cart, setCart } = useOutletContext();

  function deleteItem(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  function calculateTotal() {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0);
  }

  const sumTotal = calculateTotal();

  console.log("CART PAGE", cart);
  return (
      <div className={styles.cartPageDiv}>
      <h1>Cart</h1>
        <div className={styles.cartItemsDiv}>
          {cart &&
            cart.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  totalPrice={item.totalPrice}
                  quantity={item.productQty}
                  imgUrl={item.imgUrl}
                  deleteItem={() => deleteItem(item.id)}
                />
              );
            })}
        </div>
        <div className={styles.checkoutDiv}>
          <Checkout total={sumTotal.toFixed(2)} />
        </div>
      </div>
  );
}
