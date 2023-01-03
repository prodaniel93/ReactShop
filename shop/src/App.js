import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import shoesData from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [shoes] = useState(shoesData);
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
            <Link to='/'>홈으로</Link>
            <Link to='/detail'>상세페이지</Link>
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
            </>
          }
        />
        <Route path='/detail' element={<Detail />} />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
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
      <p>KRW {props.shoes.price}</p>
    </div>
  );
}

export default App;
