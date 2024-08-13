import { useState } from "react"

export default function AddToCart({onClick}) {
    const [productQty, setProductQty] = useState(1)

    function incrementQty() {
        if (productQty >= 99) {
            return
        }

        setProductQty(prevQty => {
            return prevQty + 1
        })
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
            <button onClick={decrementQty}>-</button>
            <input type="number" value={productQty} onChange={handleChange}/>
            <button onClick={incrementQty}>+</button>
            <button onClick={onClick}>Add to Cart</button>
        </div>
    )
}