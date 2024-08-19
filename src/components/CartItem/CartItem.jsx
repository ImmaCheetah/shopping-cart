import { useState } from 'react'
import styles from './CartItem.module.css'
import useChangeProductQuantity from '../../useChangeProductQuantity'

export default function CartItem({title, totalPrice, quantity, imgUrl}) {
    // const [productQty, setProductQty] = useState(1)
    const {productQty, incrementQty, decrementQty, handleChange} = useChangeProductQuantity({title})

    return (
        <div>
            <img src={imgUrl} alt="" className={styles.cartImg}/>
            <h4>{title}</h4>
            <h5>{totalPrice}</h5>
            <h5>Qyt: {quantity}</h5>
            <button onClick={decrementQty}>-</button>
            <label htmlFor="productQty">Qty</label>
            <input id="productQty" type="number"  value={productQty} onChange={handleChange}/>
            <button onClick={incrementQty}>+</button>
        </div>
    )
}