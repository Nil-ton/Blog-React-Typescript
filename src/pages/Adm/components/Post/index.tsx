import React from "react";
import { Typography } from "@mui/material";
import Drawer from "../../../../components/Drawer";
import { optionsDrawer } from "../../assets/optionsDrawer";

const Post = () => {
	
	return (
		<>
			<Drawer options={optionsDrawer} />
			<div style={{ margin: "20px 0 0 15%" }}>
				<Typography variant="h5">Postagem</Typography>
			</div>
		</>
	);
};

export default Post;