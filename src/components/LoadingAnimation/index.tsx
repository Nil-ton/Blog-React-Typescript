import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Box, Grid } from "@mui/material";
import animationData from "./animationData.json";

const LoadingAnimation = () => {
    
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animationData
		});
        
	}, []);

	return (
		<Grid container sx = {{justifyContent: "center", alignItems: "center", height: "100vh"}}>
			<Box ref={container} width="50%"></Box>
		</Grid>
	);
};

export default LoadingAnimation;