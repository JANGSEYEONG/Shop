import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from 'axios'
import { addItem, sortItem } from "./../store.js"

import {Const} from "../utils/const.js"

import Card from './Card';

export default function Main(){

    const dispatch = useDispatch();
    const [clickBtn, setClickBtn] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const addItems = function (){
        if(clickBtn >= 2){
            window.alert('더보기 할 상품이 없습니다.');
            return;
        } else {
            setClickBtn(clickBtn + 1);
            setLoading(true);
        }
        let url = `https://codingapple1.github.io/shop/data${clickBtn+2}.json`;

        axios.get(url)
        .then((res)=>{        
            for(let item of res.data){
                dispatch(addItem(item));
            }
        })
        .catch(()=>{
            console.log('data load fail');
        }).finally(()=>{
            setLoading(false);
        });
    }

    return (
        <>
        <div className='main-bg'></div>
        
        <button onClick={()=>{dispatch(sortItem(Const.emSortType.Name))}}>가나다 정렬</button>
        <button onClick={()=>{dispatch(sortItem(Const.emSortType.Price))}}>가격높은순 정렬</button>
        <button onClick={()=>{addItems()}}>상품 더보기</button>
        <div className='container'>
            <div className='row'>
                <Card></Card>      
            </div>
        </div>
        { isLoading ? <div className="alert alert-warning">로딩중입니다..</div> : null}
        </>       
    )
}