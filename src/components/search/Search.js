import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	search: {
		position: "relative",
		marginLeft: 0,
		width: "100%",
		marginBottom: 30,
		[theme.breakpoints.up("sm")]: {
			width: "50%",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: "none",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		transition: theme.transitions.create("width"),
		width: "100%",
		borderRadius: theme.shape.borderRadius,
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		height: 55,
		[theme.breakpoints.up("sm")]: {
			width: "0",
			"&:focus": {
				width: "50ch",
				backgroundColor: alpha(theme.palette.common.white, 0.15),
			},
		},
	},
}));

const Search = () => {
	const classes = useStyles();
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder="Title, Movies, Keyword"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ "aria-label": "search" }}
			/>
		</div>
	);
};

export default Search;
