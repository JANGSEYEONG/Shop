import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import {chgMsgState} from '../stores/msgStore';

export default function Message(props) {

    // 넘겨받는 인자들
    const {title, content, isDanger } = props;

    const msgState = useSelector(state=>state.msgState);
    const dispatch = useDispatch();
    // const [show, setShow] = useState(isShow);
    // console.log(isShow)

    const handleClose = () => dispatch(chgMsgState({isShow: false, callbackName : '', param: {}}));
    // const handleShow = () => dispatch(chgMsgState(true));

    const handleConfirm = ()=>{
        
        switch(msgState.callbackName.toString()){
            case 'CartDelete':
                msgState.param.callback(msgState.param.delId);
                break;
            default: break;
        }

        // 닫으면서 초기화
        handleClose();
    }
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button> */}

        <Modal
            show={msgState.isShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {content}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            취소
            </Button>
            
            <Button variant={isDanger? `danger` : `primary`} onClick={handleConfirm}>확인</Button>
            
            </Modal.Footer>
        </Modal>
        </>
    );
}