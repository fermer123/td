import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShopingCartContext';
import CartItem from './CartItem';

interface ShoppingCartProps {
  isOpen: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((e) => (
            <CartItem key={e.id} {...e} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
