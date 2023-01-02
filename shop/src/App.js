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

      {/* 상품 레이아웃 */}
      <div className='container'>
        <div className='row'>
          {shoes.map(function (a, i) {
            return <ShoesCard shoes={shoes[i]} i={i + 1}></ShoesCard>;
          })}
        </div>
      </div>
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
