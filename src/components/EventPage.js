import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function EventPage(){

  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(()=>{
    if(count !== 0 && count < 3){
      setAge(age+1);
    }
    
  },[count]);

  const clickBtn = ()=>{    
    setCount(count + 1);
  }
  return (
    <>
      <h4>오늘의 이벤트</h4>

      <div>
        <div>안녕, 난 {age} 살이야</div>
        <button onClick={clickBtn}>누르면 한살먹기</button>
        <div>{count}</div>
      </div>

      <Outlet></Outlet>
    </>
  )

}