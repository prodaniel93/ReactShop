import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

let NewBtn = styled.button(YellowBtn);

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className='container'>
      <YellowBtn bg='blue'>버튼</YellowBtn>
      <YellowBtn bg='orange'>버튼</YellowBtn>
      <NewBtn>버튼2</NewBtn>

      <div className='row'>
        <div className='col-md-6'>
          <img src='/image/shoes1.jpg' width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
