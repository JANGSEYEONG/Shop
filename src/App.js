
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

import Main from './components/Main';
import Detail from './components/Detail';
import About from './components/About';
import EventPage from './components/EventPage';
import Cart from './components/Cart';
import { useEffect } from 'react';

import {Util} from './utils/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {

  //let items = useSelector(state=>state.shoesData);
  let navigate = useNavigate();

  useEffect(()=>{
    let locatData = Util.GetLocal('watched', true);
    if(!locatData){ //없을 때만 추가
      Util.SetLocal('watched', [], true);
    }
  }, []);

  //https://codingapple1.github.io/userdata.json
  // react-query 4 이상 버전부터 문법 변겅, 공식 사이트 확인 필요
  let result = useQuery({ queryKey: ['작명'], queryFn: ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json')
    .then(x=>x.data)
  }});


  return (
    <div className='App'>

      {/* <div>
        {result.isLoading && '로딩중'}
        {result.error && '에러남'}
        {result.data && result.data.name}
      </div> */}

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand onClick={()=>{navigate('/')}}>Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
        </Nav>
        <Nav className='ms-auto'>
          반가워요&nbsp;
          {result.isLoading && '로딩중'}
          {result.error && '에러남'}
          {result.data && result.data.name}
        </Nav>
        </Container>
      </Navbar>

      {/* Routes 정의 */}
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/detail/:targetId' element={<Detail/>} />
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버들</div>}/>
          <Route path='location' element={<div>회사위치</div>}/>
        </Route>
        <Route path='/event' element={<EventPage/>}>
          <Route path='one' element={<p>첫 주문 시 양배추즙 서비스</p>}/>
          <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
        <Route path='/cart' element={ <Cart /> } />
        <Route path='*' element={<div>없는 페이지입니다</div>} />
      </Routes>
      
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      {/* <button onClick={()=>{navigate('/detail')}}>이동합시다</button> */}

    </div> 
  );
}

export default App;