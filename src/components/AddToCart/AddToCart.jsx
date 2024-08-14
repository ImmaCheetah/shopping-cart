import { useState } from "react"
import { useOutletContext } from "react-router-dom";

export default function AddToCart({title, price, imgUrl}) {
    const [productQty, setProductQty] = useState(1)
    const {cart, setCart} = useOutletContext()
    console.log(cart)

    function handleClick() {
        setCart(prevCart => {
            return ([
                ...prevCart, 
                {
                    title,
                    price,
                    imgUrl,
                    productQty
                }
            ])
        })
    }

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
            <button onClick={decrementQty}>-</button>
            <input type="number" value={productQty} onChange={handleChange}/>
            <button onClick={incrementQty}>+</button>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}