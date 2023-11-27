import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import default_Img from '../bg.png';

import { Util } from "../utils/util";


export default function Card(){

    const items = useSelector(state=>state.shoesData);
    const navigate = useNavigate();

    const onErrorImg = (e)=>{
      e.target.src = default_Img;
    }

    const clickCard = (id)=>{

      // 1. 최근 본 상품 배열 추가
      Util.SetRecentItem(id);
      
      // 2. 상세 페이지로 이동
      navigate(`/detail/${id}`);
    }

    return (
        items.map((item, i)=>{
            return (
              <div className='col-md-4' key={item.id} onClick={()=>{clickCard(item.id)}}>
                <img src={`https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="80%"
                      onError={onErrorImg} alt='상품 이미지' />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            )          
          })    
    )
}

export let clickCard = Card.clickCard;
