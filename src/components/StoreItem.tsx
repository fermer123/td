import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 0;
  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex-column'>
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100'>Add</Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '30px' }}
            >
              <div
                className='d-flex align-items=cemter justify-content-center'
                style={{ gap: '30px' }}
              >
                <Button>-</Button>
                <div>
                  <span className='fs-3'>{quantity} in cart</span>
                </div>
                <Button>+</Button>
              </div>
              <Button variant='danger'>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
