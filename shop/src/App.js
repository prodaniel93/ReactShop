import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState, createContext, useEffect } from 'react';
import shoesData from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';

export let Context1 = createContext();

function App() {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]));
  });

  let [shoes, setShoes] = useState(shoesData);
  let [재고] = useState([10, 11, 12]);
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
                    return (
                      <ShoesCard shoes={shoes[i]} i={i + 1} key={i}></ShoesCard>
                    );
                  })}
                </div>
              </div>
            </>
          }
        />
        {/* url 파라미터 */}
        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{ 재고 }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />

        <Route path='/cart' element={<Cart />} />
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
