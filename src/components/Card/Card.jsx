import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import styles from './Card.module.css'

import AddToCart from '../AddToCart/AddToCart'

export default function Card({title, price, imgUrl}) {
    
    

    return (
        <div>
            <img src={imgUrl} alt="" className={styles.productImage}/>
            <p>{title}</p>
            <p>{price}</p>
            <AddToCart
                title={title}
                price={price}
                imgUrl={imgUrl}
            />
        </div>
    )
}