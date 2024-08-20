import styles from './Card.module.css'

import AddToCart from '../AddToCart/AddToCart'

export default function Card({title, price, imgUrl, id}) {
    
    return (
        <div className={styles.productCard}>
            <img src={imgUrl} alt="" className={styles.productImage}/>
            <p>{title}</p>
            <p>{price}</p>
            <AddToCart
                id={id}
                title={title}
                price={price}
                imgUrl={imgUrl}
            />
        </div>
    )
}