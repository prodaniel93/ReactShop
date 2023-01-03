import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import shoesData from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div
                className='main-bg'
                style={{ backgroundImage: 'url(' + bg + ')' }}
              ></div>

              {/* 상품 레이아웃 */}
              <div className='container'>
                <div className='row'>
                  {shoes.map(function (a, i) {
                    return <ShoesCard shoes={shoes[i]} i={i + 1}></ShoesCard>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data3.json')
                    .then((result) => {
                      // shoes에 가져온 데이터 추가
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log('실패한 경우임');
                    });

                  axios.post('/safdfas', { name: 'Kim' });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        {/* url 파라미터 */}
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

function ShoesCard(props) {
  return (
    <div className='col-md-4'>
      <img
        src={process.env.PUBLIC_URL + '/image/shoes' + props.i + '.jpg'}
        width='80%'
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
