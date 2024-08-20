import { useOutletContext } from "react-router-dom";
import styles from "./CartPage.module.css";
import CartItem from "../../components/CartItem/CartItem";

export default function CartPage() {
  const { cart, setCart } = useOutletContext();

  function deleteItem(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  console.log("CART PAGE", cart);
  return (
    <>
      <h1>Cart</h1>
      {cart &&
        cart.map((item, index) => {
          return (
            <CartItem
              key={item.id}
              title={item.title}
              totalPrice={item.totalPrice}
              quantity={item.productQty}
              imgUrl={item.imgUrl}
              deleteItem={() => deleteItem(item.id)}
            />
          );
        })}
    </>
  );
}
