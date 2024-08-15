import { useState } from "react"
import { useOutletContext } from "react-router-dom";
import QuantityChanger from "../QuantityChanger";

export default function AddToCart({title, price, imgUrl}) {
    const [productQty, setProductQty] = useState(1)
    const {cart, setCart} = useOutletContext()
    console.log('SHOP PAGE', cart)

    function handleClick() {
        setCart(prevCart => {
            return ([
                ...prevCart, 
                {
                    title,
                    price,
                    imgUrl,
                    productQty,
                    totalPrice: productQty * price
                }
            ])
        })

        setProductQty(1);
    }

    

    

    return (
        <div>
            <QuantityChanger productQty={productQty}/>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}