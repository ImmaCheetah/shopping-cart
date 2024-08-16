import styles from './ShopIntro.module.css'
import { Link } from 'react-router-dom'

export default function ShopIntro() {

    return (
        <div className={styles.welcomeDiv}>
            <h1 className={styles.welcomeText}>Welcome</h1>
            <Link to={'shop'}><button className={styles.buyBtn}>Start Buying</button></Link>
        </div>
    )
}