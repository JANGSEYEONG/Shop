import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {Button, Navbar, Container, Nav} from 'react-bootstrap'


export default function Detail(){
    
    const { targetId } = useParams();
    const item = useSelector(state=>state.shoesData).find(item=>item.id.toString() === targetId); 
    
    // 여기서만 쓰이는 state는 여기서 정의하자
    const [alert, setAlert] = useState(true);
    const [tabId, setTabId] = useState(0);
    
    // useEffect 정의
    useEffect(()=>{
        
        // load, Update 시 실행
        let timer = setTimeout(()=>{
            setAlert(false);
        }, 2000);
        
        // 초기화 혹은 unmount 시 실행
        return (()=>{
            clearTimeout(timer);
        })
    },[]);
    console.log('엥')
    return (
        <>
        { alert ? <div className="alert alert-warning">2초 이내 구매 시 할인!!</div> : null}
        <div className="container">
                <div className="row">
                <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{item.title}</h4>
                <p>{item.content}</p>
                <p>{`${item.price}원`}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
        {/* <input onChange={(e)=>{setTestVal(e.target.value)}}></input> */}

        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link onClick={()=>{setTabId(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTabId(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTabId(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>

        {/* <TabContent selected={tabId}/> */}
        </>
    )
}

function TabContent({selected}){

    //console.log('엥')
    const [fade, setFade] = useState('');

    useEffect(()=>{

        setTimeout(() => { setFade('end') }, 100);

        return (()=>{
            setFade('');
        });
    },[fade]);

    return (
        <div className= {`start ${fade}`}>
            {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][selected]}
        </div>
    );
}