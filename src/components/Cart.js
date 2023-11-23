import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { addCartCount,delCartItem } from './../stores/cartStore';
import {chgMsgState} from './../stores/msgStore';

import RecentItem from './Recent';
import Message from './Message';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import {Util} from './../utils/util';


export default function Cart(){

  const {cartData, shoesData} = useSelector(state => state);

  const dispatch = useDispatch();
  
  const addCount = (id, count)=>{
    dispatch(addCartCount({id : id, count : count}));
  }
  
  const deleteCallback = (id)=>{
    dispatch(delCartItem(id))
  }

  const handleDelete = (id)=>{
    //item.id
    dispatch(chgMsgState({isShow : true, callbackName: 'CartDelete', param : {delId : id, callback: deleteCallback}}));
    // dispatch(delCartItem(item.id))}
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

    <Message title={'알림'} content={'상품을 삭제하시겠습니까?'} isDanger={true}/>

    </>
  );

}