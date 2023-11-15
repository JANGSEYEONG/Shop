import { useDispatch, useSelector } from "react-redux"
import { sortNameItem, sortItem } from "./../store.js"

import Card from './Card';

export default function Main(){

    const dispatch = useDispatch();

    return (
        <>
        <div className='main-bg'></div>
        
        <button onClick={()=>{dispatch(sortItem(0))}}>가나다 정렬</button>
        <button onClick={()=>{dispatch(sortItem(1))}}>가격높은순 정렬</button>

        <div className='container'>
            <div className='row'>
              <Card></Card>      
            </div>
        </div>
        </>       
    )
}