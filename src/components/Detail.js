import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail(){
    
    const { targetId } = useParams();
    const item = useSelector(state=>state.shoesData)[targetId]; 
    
    return (

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
    )
}