import { useState } from 'react'
import styles from './CartItem.module.css'
import useChangeProductQuantity from '../../useChangeProductQuantity'

export default function CartItem({title, totalPrice, imgUrl, deleteItem,}) {
    const {productQty, incrementQty, decrementQty, handleChange} = useChangeProductQuantity({title})

    return (
        <div className={styles.cartItemDiv}>
            <img src={imgUrl} alt="" className={styles.cartImg}/>
            <h4>{title}</h4>
            <h5>{totalPrice}</h5>
            <h5>Qty: {productQty}</h5>
            <button onClick={decrementQty}>-</button>
            <label htmlFor="productQty">Qty</label>
            <input id="productQty" type="number" value={productQty} onChange={handleChange}/>
            <button onClick={incrementQty}>+</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}