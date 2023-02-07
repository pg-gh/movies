import React from "react";
import PropTypes from "prop-types";
import {
	Box,
	Collapse,
	lighten,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Link,
	Divider,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "95%",
		margin: "4px auto",
		borderRadius: "8px",
		transition: "all .5s",
		overflow: "hidden",
		fontSize: 15,
		fontWeight: 600,
	},
	listItem: {
		transition: "all .5s",
		display: "flex",
		flexDirection: "column",
	},
	listLink: {
		padding: "0 15px",
		textDecoration: "none",
		color: "inherit",
		transition: "all .5s",
		display: "flex",
		alignItems: "center",
		width: "100%",
	},
	listIcon: {
		color: "inherit",
		justifyContent: "center",
	},
	listItemText: {
		fontSize: 15,
	},
	expanded: {
		backgroundColor: lighten(theme.palette.secondary.main, 0.1),
	},
	selected: {
		color: "#00E0FF",
	},
}));

const NavigationItem = ({ item, collapsed }) => {
	const classes = useStyles();

	// If navigation is nested
	const [open, setOpen] = React.useState(false);
	const nested = typeof item.navigationData == "object" ? true : false;

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<React.Fragment>
			{item.divider && <Divider />}
			<div
				className={clsx(
					classes.root,
					nested && open && classes.expanded,
					item.selected && classes.selected
				)}
			>
				<ListItem
					button
					className={clsx(classes.listItem)}
					onClick={handleClick}
					disableGutters
				>
					<Box
						component={!nested ? Link : "div"}
						to={`${item.url}`}
						className={clsx(classes.listLink)}
						underline="none"
					>
						<ListItemIcon className={classes.listIcon}>
							{(item.icon && <item.icon />) || ""}
						</ListItemIcon>
						<ListItemText classes={{ primary: classes.listItemText }}>
							{item.name}
						</ListItemText>
						{nested &&
							(open ? (
								<ExpandLess fontSize={collapsed ? "inherit" : "medium"} />
							) : (
								<ExpandMore fontSize={collapsed ? "inherit" : "medium"} />
							))}
					</Box>
				</ListItem>

				{nested && (
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List disablePadding>
							{item.navigationData.map((nestedItem, i) => {
								return (
									<NavigationItem
										key={i}
										item={nestedItem}
										collapsed={collapsed}
										style={{ textDecoration: "none" }}
									/>
								);
							})}
						</List>
					</Collapse>
				)}
			</div>
		</React.Fragment>
	);
};

export default NavigationItem;

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
	collapsed: PropTypes.bool,
};
