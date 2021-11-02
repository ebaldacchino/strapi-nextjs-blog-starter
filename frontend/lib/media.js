import { getStrapiURL } from './api';

// This function returns the correct URL of an image depending on where it is hosted (either on your local machine or on hosted on a server).

export function getStrapiMedia(media) {
	const imageUrl = media.url.startsWith('/')
		? getStrapiURL(media.url)
		: media.url;
	return imageUrl;
}
