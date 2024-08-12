import styles from './Card.module.css'


export default function Card({title, price, imgUrl}) {
    return (
        <div>
            <img src={imgUrl} alt="" className={styles.productImage}/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}