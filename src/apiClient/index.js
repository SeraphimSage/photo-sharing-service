import getImageResponse from "../stubs/getImageResponse";
import postImageResponse from "../stubs/postImageResponse";

export const getImage = () => {
	return new Promise(() => {
		return getImageResponse;
	});
};

export const postImage = () => {
	return new Promise((resolution, rejection) => {
		resolution(postImageResponse);
		if (!postImageResponse) {
			rejection("NO IMAGE RESPONSE");
		}
	});
};
