import { useOutletContext } from 'react-router-dom'
import styles from './ShopPage.module.css'
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

export default function ShopPage() {
    // const context = useOutletContext()
    const [storeData, setStoreData] = useOutletContext()
    const [storeInStorage, setStoreInStorage] = useState(JSON.parse(localStorage.getItem('storageData')))
    console.log(`YOOOO, ${storeInStorage}`);
    if(!storeInStorage) {
        setStoreInStorage(localStorage.getItem('storageData'))
        console.log('no store data')
    }
    console.log(storeInStorage)
    return (
        <>
            <h1>Items</h1>
            {/* {storeData[0].map((item) => {
                return [item]
            })} */}
            {storeInStorage.map((product) => {
                return (
                    <Card 
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      imgUrl={product.image}
                    />
                )
                
            })}
            
        </>
    )
}