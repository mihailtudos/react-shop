import './category.styles.scss';
import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import ProductCard from "../../product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../../store/categories/category.selector";
import Spinner from "../../spinner/spinner.component";

const Category = () => {
	const {category} = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);
	const isLoading = useSelector(selectCategoriesIsLoading);

	useEffect(() =>{
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);

	return (
		<Fragment>
			<h2 className='category-title'>{ category }</h2>
			{
				isLoading
					? <Spinner/>
					: <div className='category-container'>
						{
							products &&
							products.map(product => <ProductCard key={product.id} product={product} />)
						}
					</div>
			}
		</Fragment>
	)

}
export default Category;
