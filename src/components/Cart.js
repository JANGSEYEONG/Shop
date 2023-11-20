import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { addCartCount,delCartItem } from './../stores/cartStore';
import {chgMsgState} from './../stores/msgStore';

import RecentItem from './Recent';
import Message from './Message';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export default function Cart(){

  const items = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  
  const addCount = (id, count)=>{
    dispatch(addCartCount({id : id, count : count}));
  }

  const delCallback = ()=>{
    // useMemo 쓰면 뭔가 가능할듯한데..
    window.alert('확인버튼누름');
  }

  const handleDelete = ()=>{
    dispatch(chgMsgState(true));
    // dispatch(delCartItem(item.id))}
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
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, i)=>{
              return (    
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                    <button onClick={()=>{addCount(item.id, -1)}}>-</button>
                    <button onClick={()=>{addCount(item.id, 1)}}>+</button>  
                    <button onClick={()=>{handleDelete()}}>🗑️</button>                  
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <div style={{margin: '3rem'}}>
        <RecentItem/>
      </div>
    </div>

    <Message title={'알림'} content={'상품을 삭제하시겠습니까?'} isDanger={true} callback={delCallback}/>

    </>
  );

}