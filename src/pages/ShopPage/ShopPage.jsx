import { useOutletContext } from 'react-router-dom'
import styles from './ShopPage.module.css'

export default function ShopPage() {
    // const context = useOutletContext()
    const [storeData, setStoreData] = useOutletContext()
    console.log(storeData);
    // const storeList = storeData.map((item) => {
    //     return item
    // })

    return (
        <>
            <h1>Items</h1>
            {storeData[0].id}
            
        </>
    )
}