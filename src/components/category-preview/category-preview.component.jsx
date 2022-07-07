

import ProductCard from '../product-card/product-card.component';

import {CatReview, LinkTitle, CatPreview} from './category-preview';

const CategoryPreview = ({ title, products }) => {
    return(
        <CatReview>
        <h2>
            <LinkTitle to={title}>{title.toUpperCase()}</LinkTitle>
        </h2>
        <CatPreview>
            {
                products
                .filter(( _, idx) => idx < 4)
                .map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
        </CatPreview>
        </CatReview>
    );
}

export default CategoryPreview;