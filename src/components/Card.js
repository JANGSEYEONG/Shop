import { useSelector } from "react-redux";
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

export default function Card(){

    let items = useSelector(state=>state.shoesData);
    let navigate = useNavigate();

    return (
        items.map((item, i)=>{
            return (
              <div className='col-md-4' key={item.id} onClick={()=>{navigate(`/detail/${item.id}`)}}>
                <img src={`https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="80%"/>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            )          
          })    
    )
}