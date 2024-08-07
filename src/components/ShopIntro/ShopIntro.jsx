import styles from './ShopIntro.module.css'
import { Link } from 'react-router-dom'

export default function ShopIntro() {

    return (
        <>
            <h1>Welcome</h1>
            {/* <button onClick={onClick} className={styles.enterBtn}>Enter Shop</button> */}
            <Link to={'shop'}><button>Start Buying</button></Link>
        </>
    )
}