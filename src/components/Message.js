import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Message(props) {

    // 넘겨받는 인자들
    const {title, content, isDanger, callback, payLoad} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = ()=>{
        if(callback) callback();
        handleClose();
    }
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button>

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