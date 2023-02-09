import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CardActionArea from "@material-ui/core/CardActionArea";
import clsx from "clsx";

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
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	cardAction: {
		"&:hover": {
			backgroundColor: "#303030",
		},
	},
	selected: {
		border: "3px solid #00E0FF",
	},
}));

let selectedId = 0;
function MovieCard({ movie, onCardHandler }) {
	const classes = useStyles();

	return (
		<Card
			className={clsx(
				classes.root,
				selectedId === movie.id && classes.selected
			)}
		>
			<CardActionArea
				className={classes.cardAction}
				onClick={() => {
					onCardHandler(movie.id);
					selectedId = movie.id;
				}}
			>
				<CardMedia
					className={classes.media}
					image={movie.Poster}
					title={movie.id}
				/>
				<CardContent className={classes.content}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className={classes.title}
					>
						{movie.Title}
					</Typography>
				</CardContent>
				<CardActions disableSpacing className={classes.action}>
					<IconButton
						disableRipple
						disableFocusRipple
						className={classes.iconButton}
					>
						<PlayCircleOutlineIcon fontSize="medium" />
					</IconButton>
					<IconButton
						disableRipple
						disableFocusRipple
						className={classes.iconButton}
					>
						<AddCircleOutlineIcon fontSize="medium" />
					</IconButton>
				</CardActions>
			</CardActionArea>
		</Card>
	);
}

export default memo(MovieCard);
