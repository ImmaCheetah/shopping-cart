import styles from './ShopIntro.module.css'

export default function ShopIntro({onClick}) {
    // function onClick() {

    // }

    return (
        <>
            <h1>Img</h1>
            <button onClick={onClick} className={styles.enterBtn}>Enter Shop</button>
        </>
    )
}