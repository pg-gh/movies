import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	Avatar,
	Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Navigation } from "../components";

const drawerWidth = 275;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		height: "100vh",
	},
	appBarShift: {
		[theme.breakpoints.up("sm")]: {
			zIndex: theme.zIndex.drawer + 2,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			zIndex: theme.zIndex.drawer + 2,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	toolbar: { paddingRight: 24, ...theme.mixins.toolbar },
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		position: "fixed",
		height: "100vh",
		whiteSpace: "nowrap",
		transition: theme.transitions.create(["width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		color: theme.palette.grey[100],
		backgroundColor: theme.palette.secondary.main,
	},
	drawerPaperClose: {
		[theme.breakpoints.up("sm")]: {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
		},
	},
	appBarTitle: {
		flex: 1,
		fontWeight: 200,
	},
	contentShift: {
		flexGrow: 1,
		overflow: "auto",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(7),
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
	},
	content: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
	},
	sidebarImage: {
		width: "95%",
		margin: "30px auto",
		textAlign: "center",
	},
	avatarRoot: {
		width: 68,
		height: 68,
		margin: "0 auto",
	},
	headerTitle: {
		width: "95%",
		fontSize: 20,
		marginTop: 15,
	},
}));

const MainLayout = ({ themeConfig, navigationData, children }) => {
	const theme = useTheme();
	const [extended, setExtended] = React.useState(true);
	const classes = useStyles(extended);
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
		setExtended(!extended);
	};

	const drawer = (
		<React.Fragment>
			<div className={classes.sidebarImage}>
				<Avatar
					size={100}
					alt="Evelyn Carnahan"
					src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					className={classes.avatarRoot}
				>
					Image
				</Avatar>
				<Typography variant="h4" noWrap className={classes.headerTitle}>
					Eric Hoffman
				</Typography>
			</div>
			<Divider />
			<Navigation data={navigationData} collapsed={!extended} />
		</React.Fragment>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Hidden smUp implementation="css">
				<AppBar
					position="fixed"
					className={clsx(classes.appBarShift, extended && classes.appBar)}
				>
					<Toolbar className={classes.toolbar}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="temporary"
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(
							classes.drawerPaper,
							!extended && classes.drawerPaperClose
						),
					}}
					open={extended}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<main className={clsx(classes.contentShift, extended && classes.content)}>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
					}}
				>
					{children}
				</div>
			</main>
		</div>
	);
};

export default MainLayout;

MainLayout.propTypes = {
	navigationData: PropTypes.arrayOf(PropTypes.object).isRequired,
	themeConfig: PropTypes.object,
	window: PropTypes.func,
	children: PropTypes.node,
};
