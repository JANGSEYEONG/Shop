
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

import Main from './components/Main';
import Detail from './components/Detail';

function App() {

  //let items = useSelector(state=>state.shoesData);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      {/* Routes 정의 */}
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/about' element={<div>about</div>}>
          <Route path='member' element={<div>멤버들</div>}/>
          <Route path='location' element={<div>회사위치</div>}/>
        </Route>
        <Route path='*' element={<div>없는 페이지입니다</div>} />
      </Routes>
      
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <button onClick={()=>{navigate('/detail')}}>이동합시다</button>
    </div> 
  );
}

export default App;
