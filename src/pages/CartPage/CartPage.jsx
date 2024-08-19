import { useOutletContext } from 'react-router-dom'
import styles from './CartPage.module.css'
import CartItem from '../../components/CartItem/CartItem'

export default function CartPage() {
    const {cart, setCart} = useOutletContext()

    console.log('CART PAGE', cart)
    return (
        <>
            <h1>Cart</h1>
            {cart && cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        title={item.title}
                        totalPrice={item.totalPrice}
                        quantity={item.productQty}
                        imgUrl={item.imgUrl}
                    />
                )
            })}
        </>
    )
}