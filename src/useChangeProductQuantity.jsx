import { useOutletContext } from "react-router-dom"

export default function useChangeProductQuantity({title}) {
    const {cart, setCart} = useOutletContext()
    
    function findCartItem() {
        return cart.find((item) => item.title === title)
    }
    
    const item = findCartItem(title)
    function incrementQty() {
        
        if (item.productQty >= 99) {
            return
        }
        setCart(prevCart => {
            return ([
                ...prevCart, 
                {
                    ...item,
                    productQty: item.productQty + 1,
                }
            ])
        })
    }

    function decrementQty() {
        const item = findCartItem(title)

        if (item.productQty <= 1) {
            return
        }

        setCart(prevCart => {
            return ([
                ...prevCart, 
                {
                    ...item,
                    productQty: item.productQty - 1,
                }
            ])
        })
    }

    function handleChange(e) {
        const item = findCartItem(title)

        if (item.productQty > 99) {
            setCart(prevCart => {
                return ([
                    ...prevCart, 
                    {
                        ...item,
                        productQty: 99,
                    }
                ])
            })
        } else {
            setCart(prevCart => {
                return ([
                    ...prevCart, 
                    {
                        productQty: e.target.value,
                    }
                ])
            })
        }
    }

// What would these be?
    return {
        productQty: item?.productQty,
        incrementQty,
        decrementQty,
        handleChange,
    }
}