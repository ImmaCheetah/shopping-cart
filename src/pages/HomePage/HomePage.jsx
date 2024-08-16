import styles from './HomePage.module.css'
import ShopIntro from '../../components/ShopIntro/ShopIntro'

export default function HomePage() {
    return (
        <div className={styles.introDiv}>
            <ShopIntro />
        </div>
    )
}