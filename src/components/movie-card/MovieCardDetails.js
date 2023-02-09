import React, { memo } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		background: "#394B61",
		boxShadow: "none",
		borderRadius: 11,
	},
	details: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: "100%",
		maxWidth: 389,
		flexDirection: "column",
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
	title: {
		fontWeight: 700,
		fontSize: 30,
		lineHeight: "41px",
		color: "#D4D7DD",
	},
	progressContainer: {
		display: "flex",
		alignItems: "center",
		maxWidth: 200,
		width: "100%",
		marginTop: 10,
	},
	progress: {
		maxWidth: 111,
		width: "100%",
		marginRight: 10,
	},
	rating: {
		fontSize: 16,
		color: "#fff",
	},
	infoText: {
		fontSize: 16,
		lineHeight: "31px",
		color: "#D4D7DD",
		width: "50%",
		"& span": {
			fontWeight: 600,
		},
	},
	plotText: {
		fontWeight: 400,
		fontSize: 14,
		lineHeight: "18px",
		color: "#fff",
		marginTop: 10,
	},
	list: {
		padding: 0,
		maxWidth: 500,
		width: "100%",
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 10,
		borderRadius: 5,
	},
	colorPrimary: {
		backgroundColor: theme.palette.grey[200],
	},
	bar: {
		borderRadius: 5,
		backgroundColor: "#00E0FF",
	},
}))(LinearProgress);

const PlayButton = withStyles((theme) => ({
	root: {
		color: "#000000",
		backgroundColor: "#00E0FF",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#00E0FF",
		},
	},
}))(Button);

const WatchButton = withStyles((theme) => ({
	root: {
		color: "#00E0FF",
		backgroundColor: "none",
		textTransform: "none",
		border: "1px solid #00E0FF",
		"&:hover": {
			backgroundColor: "none",
		},
	},
}))(Button);

function MovieCardDetails({ movie }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.cover}
				image={movie.Poster}
				title={movie.Title}
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5" className={classes.title}>
						{movie.Title}
					</Typography>
					<Box className={classes.progressContainer}>
						<Box mr={1} className={classes.progress}>
							<BorderLinearProgress
								variant="determinate"
								value={
									movie.imdbRating !== "N/A"
										? Math.floor((movie.imdbRating * 100) / 10)
										: 0
								}
							/>
						</Box>
						<Typography
							variant="h6"
							color="textSecondary"
							className={classes.rating}
						>
							{movie.imdbRating !== "N/A" ? `${movie.imdbRating}/10` : "N/A"}
						</Typography>
					</Box>
					<List>
						<ListItem disableGutters className={classes.list}>
							<ListItemText className={classes.infoText} primary="Year:" />
							<ListItemText className={classes.infoText} primary={movie.Year} />
						</ListItem>
						<ListItem disableGutters className={classes.list}>
							<ListItemText
								className={classes.infoText}
								primary="Running Time:"
							/>
							<ListItemText
								className={classes.infoText}
								primary={movie.Runtime}
							/>
						</ListItem>
						<ListItem disableGutters className={classes.list}>
							<ListItemText
								className={classes.infoText}
								primary="Directed by:"
							/>
							<ListItemText
								className={classes.infoText}
								primary={movie.Director}
							/>
						</ListItem>
						<ListItem disableGutters className={classes.list}>
							<ListItemText className={classes.infoText} primary="language:" />
							<ListItemText
								className={classes.infoText}
								primary={movie.Language}
							/>
						</ListItem>
					</List>
					<p className={classes.plotText}>{movie.Plot}</p>
				</CardContent>
				<div className={classes.controls}>
					<PlayButton
						variant="contained"
						color="primary"
						className={classes.margin}
					>
						Play Movie
					</PlayButton>
					<WatchButton
						variant="outlined"
						color="primary"
						className={classes.margin}
					>
						Watch Trailer
					</WatchButton>
				</div>
			</div>
		</Card>
	);
}

export default memo(MovieCardDetails);
