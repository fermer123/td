import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShopingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import CartItem from './CartItem';
import storeItems from '../data/items.json';

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
          <div className='ms-auto fw-bold fs-5'>
            Total:{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((e) => e.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
