import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import styles from './Card.module.css'

import AddToCart from '../AddToCart/AddToCart'

export default function Card({title, price, imgUrl}) {
    const {cart, setCart} = useOutletContext()
    const [quantity, setQuantity] = useState(1);
    console.log('CART', cart)

    function handleClick() {
        setCart(prevCart => {
            return ([
                ...prevCart, 
                {
                    title,
                    price,
                    imgUrl,
                    quantity
                }
            ])
        })
    }

    return (
        <div>
            <img src={imgUrl} alt="" className={styles.productImage}/>
            <p>{title}</p>
            <p>{price}</p>
            <AddToCart onClick={handleClick} quantity={quantity}/>
        </div>
    )
}