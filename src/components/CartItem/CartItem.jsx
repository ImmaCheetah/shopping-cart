import { useState } from 'react'
import styles from './CartItem.module.css'


export default function CartItem({title, totalPrice, quantity, imgUrl}) {
    const [productQty, setProductQty] = useState(1)

    function incrementQty() {
        if (productQty >= 99) {
            return
        }
        setProductQty(productQty + 1)
    }

    function decrementQty() {
        if (productQty <= 1) {
            return
        }

        setProductQty(prevQty => {
            return prevQty - 1
        })
    }

    function handleChange(e) {
        if (productQty > 99) {
            setProductQty(99)
        } else {
            setProductQty(e.target.value)
        }
    }

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