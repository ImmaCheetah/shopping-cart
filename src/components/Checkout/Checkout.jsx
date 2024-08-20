export default function Checkout({ total }) {
  return (
    <div>
      <h5>Subtotal: {total}</h5>
      <h5>Shipping: FREE</h5>
      <h4>Total: {total}</h4>
      <button>Checkout</button>
    </div>
  );
}
