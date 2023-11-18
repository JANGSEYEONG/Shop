import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import default_Img from '../bg.png';

export default function Card(){

    const items = useSelector(state=>state.shoesData);
    const navigate = useNavigate();

    const onErrorImg = (e)=>{
      e.target.src = default_Img;
    }

    return (
        items.map((item, i)=>{
            return (
              <div className='col-md-4' key={item.id} onClick={()=>{navigate(`/detail/${item.id}`)}}>
                <img src={`https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="80%"
                      onError={onErrorImg}/>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            )          
          })    
    )
}