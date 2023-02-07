import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import MovieCard from "../movie-card/MovieCard";
import Search from "../../components/search/Search";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const MoviesList = ({ list }) => {
	const classes = useStyles();
	const [data, setData] = useState(list);
	const elInput = useRef < HTMLInputElement > null;

	return (
		<div className={classes.root}>
			<Search />
			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="flex-start"
				alignItems="flex-start"
			>
				{list.map((elem) => (
					<Grid item xs={12} sm={8} md={4} lg={3} key={data.indexOf(elem)}>
						<MovieCard item={elem} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default MoviesList;
