import { CartItemContainer, Img, ItemDetails, Name} from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return(
        <CartItemContainer>
        <Img as='img' src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
            <Name as='span'>{name}</Name>
            <span className='price'>{quantity} x £{price}</span>
        </ItemDetails>
            
        </CartItemContainer>
    );
}

export default CartItem;