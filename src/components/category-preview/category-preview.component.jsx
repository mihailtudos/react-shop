import './category-preview.styles.scss';
import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";

const CategoryPreview = ({title, products}) => {
	return (
		<div className='category-preview-container'>
			<Link to={title}>
				<h2>
					<span className='title'>{title.toUpperCase()}</span>
				</h2>
			</Link>
			<div className='preview'>
				{
					products
						.map((product, index) => (
								index < 4 && <ProductCard key={product.id} product={product}/>
							)
						)
				}
			</div>
		</div>
	)
}
export default CategoryPreview;
