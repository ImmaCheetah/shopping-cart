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
            return (
                prevCart.map((product) => {
                    if (product.title === item.title) {
                        return {
                            ...product,
                            productQty: item.productQty + 1,
                            totalPrice: item.price * item.productQty,
                        }
                    } else {
                        return product
                    }
                })
            )

        })
    }

    function decrementQty() {

        if (item.productQty <= 1) {
            return
        }

        setCart(prevCart => {
            return (
                prevCart.map((product) => {
                    if (product.title === item.title) {
                        return {
                            ...product,
                            productQty: item.productQty - 1
                        }
                    } else {
                        return product
                    }
                })
            )
        })
    }

    function handleChange(e) {

        if (item.productQty > 99) {
            setCart(prevCart => {
                return (
                    prevCart.map((product) => {
                        if (product.title === item.title) {
                            return {
                                ...product,
                                productQty: 99
                            }
                        } else {
                            return product
                        }
                    })
                )
            })
        } else {
            setCart(prevCart => {
                return (
                    prevCart.map((product) => {
                        if (product.title === item.title) {
                            return {
                                ...product,
                                productQty: e.target.value
                            }
                        } else {
                            return product
                        }
                    })
                )
            })
        }
    }

    return {
        productQty: item?.productQty,
        incrementQty,
        decrementQty,
        handleChange,
    }
}