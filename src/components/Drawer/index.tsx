import React from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { IOptionsDrawer } from "./types";
import { useNavigate } from "react-router-dom";

const Drawer = ({ options }: IOptionsDrawer) => {
	const navigate = useNavigate();

	return (
		<MUIDrawer variant="permanent">
			<List>
				{options.map((item) => {
					const { text, redirectTo } = item;
					return (
						<ListItem button key={text} onClick={() => navigate(redirectTo)}>
							<Toolbar>
								<ListItemText primary={text} />
							</Toolbar>
						</ListItem>
					);
				})}
			</List>
		</MUIDrawer>
	);
};

export default Drawer;