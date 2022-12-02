import {BackgroundImage, DirectoryItemContainer, Body} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<DirectoryItemContainer className='directory-item-container'>
			<BackgroundImage image={imageUrl}/>
			<Body>
				<h2>{ title }</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	)
}

export default DirectoryItem;
