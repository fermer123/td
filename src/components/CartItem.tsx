import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShopingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((e) => e.id === id);
  if (item == null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '74px', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        {item.name}
        {quantity > 1 && (
          <span
            style={{ fontSize: '10px', marginLeft: '10px' }}
            className='text-muted'
          >
            x{quantity}
          </span>
        )}
        <div className='text-muted' style={{ fontSize: '16px' }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div className='text-muted' style={{ fontSize: '16px' }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant='outline-danger'
        size='sm'
        onClick={() => removeItem(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
export default CartItem;
