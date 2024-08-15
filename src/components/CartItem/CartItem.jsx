import styles from './CartItem.module.css'

export default function CartItem({title, totalPrice, quantity, imgUrl}) {

    return (
        <div>
            <img src={imgUrl} alt="" className={styles.cartImg}/>
            <h4>{title}</h4>
            <h5>{totalPrice}</h5>
            <h5>Qyt: {quantity}</h5>
        </div>
    )
}