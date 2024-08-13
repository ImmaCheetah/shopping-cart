import { useOutletContext } from 'react-router-dom'
import styles from './Card.module.css'

import AddToCart from '../AddToCart/AddToCart'

export default function Card({title, price, imgUrl}) {
    const {cart, setCart} = useOutletContext()
    console.log('CART', cart)

    function handleClick() {
        setCart(prevQty => {
            return ([
                ...prevQty, 
                {
                    title,
                    price,
                    imgUrl,
                }
            ])
        })
    }

    return (
        <div>
            <img src={imgUrl} alt="" className={styles.productImage}/>
            <p>{title}</p>
            <p>{price}</p>

            <button onClick={handleClick}>Add to Cart</button>
            <AddToCart onClick={handleClick}/>
        </div>
    )
}