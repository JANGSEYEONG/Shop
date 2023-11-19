import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import {chgMsgState} from '../stores/msgStore';

export default function Message(props) {

    // 넘겨받는 인자들
    const {title, content, isDanger, callback, payLoad} = props;

    const show = useSelector(state=>state.msgState);
    const dispatch = useDispatch();
    // const [show, setShow] = useState(isShow);
    // console.log(isShow)

    const handleClose = () => dispatch(chgMsgState(false));
    const handleShow = () => dispatch(chgMsgState(true));

    const handleConfirm = ()=>{
        if(callback) callback();
        handleClose();
    }
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button> */}

        <Modal
            show={show}
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