import { useOutletContext } from 'react-router-dom'
import styles from './CartPage.module.css'

export default function CartPage() {
    const {cart, setCart} = useOutletContext()

    console.log('CART PAGE', cart)
    return (
        <>
            <h1>Cart</h1>
        </>
    )
}