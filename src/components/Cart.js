import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { addCartCount } from './../stores/cartStore';

export default function Cart(){

  const items = useSelector(state => state.cartData);
  const dispatch = useDispatch();

  const addCount = (id, count)=>{
    dispatch(addCartCount({id : id, count : count}));
  }

  return (
    <>
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
                  <td><button onClick={()=>{addCount(item.id, 1)}}>+</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  );

}