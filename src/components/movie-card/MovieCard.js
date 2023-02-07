import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "100%",
		padding: 10,
		borderRadius: 11,
	},
	media: {
		height: 0,
		paddingTop: 285,
		backgroundSize: "100% 100%",
		backgroundPosition: "top",
		borderRadius: 6,
	},
	title: {
		color: "#D4D7DD",
		fontSize: 15,
		fontWeight: 600,
		textAlign: "left",
	},
	content: {
		padding: "16px 5px",
	},
	action: {
		padding: 0,
	},
	iconButton: {
		padding: "0 5px 10px 5px",
	},
}));

export default function MovieCard({ item }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={item.Poster}
				title={item.Title}
			/>
			<CardContent className={classes.content}>
				<Typography
					variant="body2"
					color="textSecondary"
					component="p"
					className={classes.title}
				>
					{item.Title}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className={classes.action}>
				<IconButton className={classes.iconButton}>
					<PlayCircleOutlineIcon fontSize="medium" />
				</IconButton>
				<IconButton className={classes.iconButton}>
					<AddCircleOutlineIcon fontSize="medium" />
				</IconButton>
			</CardActions>
		</Card>
	);
}
