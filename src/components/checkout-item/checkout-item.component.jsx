import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    CheckoutItemContainer, 
    ImageContainer,
    CheckoutImg,
    NameQualPrice,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <CheckoutImg as='img' src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <NameQualPrice as='span'>{name}</NameQualPrice>
            <Quantity as='span'>
            <Arrow onClick={removeItemHandler}>
                &#10094;
            </Arrow>
            <Value as='span'>{quantity}</Value>
            <Arrow onClick={addItemHandler}>
                &#10095;
            </Arrow>
            </Quantity>
            <NameQualPrice as=''price>{price}</NameQualPrice>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;