import React from "react";
import { Typography } from "@mui/material";
import Drawer from "../../../../components/Drawer";
import { optionsDrawer } from "../../assets/optionsDrawer";

const CriarPost = () => {
	return (
		<>
			<Drawer options={optionsDrawer}/>
			<div style={{ margin: "20px 0 0 15%" }}>
				<Typography variant="h5">Criar Post</Typography>
			</div>
		</>
	);
};

export default CriarPost;