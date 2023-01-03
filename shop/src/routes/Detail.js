import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';

function Detail(props) {
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let { id } = useParams();
  let findProduct = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  return (
    <div className='container'>
      {alert == true ? (
        <div className='alert alert-warning'>2초이내 구매시 할인</div>
      ) : null}

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

      {/* tab */}
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link0'
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey='link1'
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey='link2'
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

// props 대신 { tab } 사용가능
function TabContent({ tab }) {
  if (tab == 0) {
    return <div>내용0</div>;
  } else if (tab == 1) {
    return <div>내용1</div>;
  } else {
    return <div>내용2</div>;
  }
}

export default Detail;
