import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { addCartCount,delCartItem } from './../stores/cartStore';

import RecentItem from './Recent';

export default function Cart(){

  const items = useSelector(state => state.cartData);
  const dispatch = useDispatch();

  const addCount = (id, count)=>{
    dispatch(addCartCount({id : id, count : count}));
  }

  return (
    <>
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
                    <button onClick={()=>{dispatch(delCartItem(item.id))}}>🗑️</button>                  
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
    </>
  );

}