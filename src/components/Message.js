import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { initMsgState } from '../stores/msgStore';
import {Const} from '../utils/const';

export default function Message() {

    const msgState = useSelector(state=>state.msgState);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(initMsgState());

    const handleClick = (btnStatus)=>{

        switch(btnStatus){
            case "Confirm":
                if(typeof msgState.confirmCallback === "function") msgState.confirmCallback(msgState.param);
                break;
            case "Cancle":
                if(typeof msgState.cancleCallback === "function") msgState.cancleCallback(msgState.param);
                break;
            default : break;
        }

        // 닫으면서 초기화
        handleClose();
    }

    return (
        <>
        
        <Modal
            show={msgState.isShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{msgState.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {msgState.content}
            </Modal.Body>
            <Modal.Footer>

            {
                msgState.type === Const.emMessageType.OkCancel && <Button variant="secondary" onClick={()=>{handleClick("Cancle");}}>취소</Button>
            }
            <Button variant={msgState.isDanger? `danger` : `primary`} onClick={()=>{handleClick("Confirm");}}>확인</Button>
            
            </Modal.Footer>
        </Modal>
        </>
    );
}