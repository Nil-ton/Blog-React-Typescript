import React from "react";
import { useOutletContext } from "react-router-dom";
const Post = () => {
	console.log(useOutletContext());
	return (
		<h1>Postagem</h1>
	);
};

export default Post;