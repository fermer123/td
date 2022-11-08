import { Button, Container, Nav, Navbar as NavBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShopingCartContext';

const Navbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavBs sticky='top' className='bg-white shadow-lg mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          className='rounded-circle'
          style={{ position: 'relative' }}
          variant='outline-primary'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9648 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z'
              fill='black'
            />
            <path
              d='M16.4421 15.0354C16.7692 15.0354 17.0343 14.7702 17.0343 14.4431V12.6663C17.0343 12.3392 16.7692 12.074 16.4421 12.074C16.1149 12.074 15.8498 12.3392 15.8498 12.6663V14.4431C15.8497 14.7702 16.1149 15.0354 16.4421 15.0354Z'
              fill='black'
            />
            <path
              d='M7.55803 15.0354C7.88514 15.0354 8.1503 14.7702 8.1503 14.4431V12.6663C8.1503 12.3392 7.88514 12.074 7.55803 12.074C7.23092 12.074 6.96576 12.3392 6.96576 12.6663V14.4431C6.96576 14.7702 7.23092 15.0354 7.55803 15.0354Z'
              fill='black'
            />
          </svg>
          <div
            style={{
              color: 'white',
              width: '20px',
              height: '20px',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%,25%)',
            }}
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavBs>
  );
};

export default Navbar;
