import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style }) => {
	const imageUrl = getStrapiMedia(image);
	console.log(image);
	return (
		<NextImage
			src={imageUrl}
			alt={image.alternativeText || image.name}
			width={image.width}
			height={image.height}
			style={style} 
		/>
	);
};

export default Image;
