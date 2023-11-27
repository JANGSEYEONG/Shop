import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { addCartCount,delCartItem,sortCartItem } from './../stores/cartStore';
import {chgMsgState} from './../stores/msgStore';

import RecentItem from './Recent';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import {Util} from './../utils/util';
import {Const} from "../utils/const.js"


export default function Cart(){

  const cartData = useSelector(state => state.cartData);
  const shoesData = useSelector(state => state.shoesData);

  const dispatch = useDispatch();
  
  const addCount = (id, count)=>{
    const remainCnt = cartData.find(x=>x.id===id).count + count;
    if(remainCnt <= 0){
      // 수량이 1개만 남았는데 줄이는 경우, 삭제 메세지 띄우기
      handleDelete(id)
    }else{
      dispatch(addCartCount({id : id, count : count}));
    }   
  }
  
  const deleteCallback = ({delId})=>{
    dispatch(delCartItem(delId))
  }

  const handleDelete = (id)=>{
    console.log('click 상품삭제')
    //item.id
    dispatch(chgMsgState({
      isShow : true,
      isDanger : true,
      type : Const.emMessageType.OkCancel,

      title : '알림',
      content: '상품을 삭제하시겠습니까?',
      
      confirmCallback: deleteCallback, 

      cancleCallback : null,
      param : {delId : id}
    }));
  }

  const getItemPrice = (id)=>{
    if(!Util.IsNullOrWhiteSpace(shoesData))
      return shoesData.find((x)=>x.id === id).price;

    return 0;
  }
  
  const getTotalPrice = ()=>{
    
    return cartData.reduce((acc, cur, idx, arr)=>{
      return acc + (getItemPrice(cur.id) * cur.count);
      //return acc;
    }, 0);

  }

  let result = useQuery({ queryKey: ['작명'], queryFn: ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json')
    .then(x=>x.data)
  }});

  return (
    <>
    <div>{`${result.data.name}의 장바구니`}</div>
    <button type="button" className="btn btn-secondary" onClick={()=>{dispatch(sortCartItem(Const.emSortType.Name))}}>가나다 정렬하기</button>
    <div style={{display : 'flex'}}>    
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {
            cartData.map((item, i)=>{
              return (    
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                    <button onClick={()=>{addCount(item.id, -1)}}>-</button>
                    <button onClick={()=>{addCount(item.id, 1)}}>+</button>  
                    <button onClick={()=>{handleDelete(item.id)}}>🗑️</button>                  
                  </td>
                  <td>{item.count * getItemPrice(item.id)}</td>
                </tr>
              )
            })          
          }
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>총합</td>
              <td>{getTotalPrice()}</td>
            </tr>
        </tbody>
      </Table>
      <div style={{margin: '3rem'}}>
        <RecentItem/>
      </div>
    </div>

    
    </>
  );

}