import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import shoesData from './data.js';

function App() {
  let [shoes] = useState(shoesData);

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className='main-bg'
        style={{ backgroundImage: 'url(' + bg + ')' }}
      ></div>

      {/* 상품 레이아웃 3개 */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={process.env.PUBLIC_URL + '/image/shoes1.jpg'}
              width='80%'
            />
            <h4>{shoesData[0].title}</h4>
            <p>KRW {shoesData[0].price}</p>
          </div>

          <div className='col-md-4'>
            <img src='/image/shoes2.jpg' width='80%' />
            <h4>{shoes[1].title}</h4>
            <p>KRW {shoesData[1].price}</p>
          </div>

          <div className='col-md-4'>
            <img src='/image/shoes3.jpg' width='80%' />
            <h4>{shoesData[2].title}</h4>
            <p>KRW {shoesData[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
