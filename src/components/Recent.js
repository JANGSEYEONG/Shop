import default_Img from '../bg.png';

import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

import {Util} from './../utils/util'


export default function RecentItem(){

    const navigate = useNavigate();
    const clickRecent = (id)=>{

        // 1. 최근 본 상품 배열 추가
        Util.SetRecentItem(id);

        // 2. 상세 페이지로 이동
        navigate(`/detail/${id}`)
    }

    const recentItems = Util.GetLocal('watched', true) || [];
    const items = useSelector(state=>state.shoesData);

    const onErrorImg = (e)=>{
        e.target.src = default_Img;
    }

    
    return (
        <>
        <div style={{marginRight: '1rem'}}>
            <h6>최근 본 상품</h6>
            {
                [...recentItems].reverse().map((id)=>{
                    let itemTitle = items.find(item=>item.id === id)?.title;
                    if(Util.IsNullOrWhiteSpace(itemTitle)) return null;
                    return (
                        <div onClick={()=>{clickRecent(id)}} className="card" style={{width: '10rem', height: '10rem', marginBottom: '0.5rem'}} key={id}>
                            <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} className="card-img-top" alt="..."
                                onError={onErrorImg}/>
                            <div className="card-body">
                                <p className="card-text">
                                    {itemTitle}
                                    </p>
                            </div>             
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}