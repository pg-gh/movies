import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import MovieCard from "../movie-card/MovieCard";
import Search from "../../components/search/Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
	},
	iconBtn: {
		alignSelf: "flex-start",
		top: 10,
	},
	headerTitle: {
		margin: "0 10px",
	},
}));

const MoviesList = ({ list }) => {
	const classes = useStyles();
	const [data, setData] = useState(list);

	const filterSearchData = (value) => {
		const lowercasedValue = value.toLowerCase().trim();
		const dataList = [...list];
		if (lowercasedValue === "") setData(dataList);
		else {
			const filteredData = dataList.filter((item) => {
				return `${item.Title}`
					.toString()
					.toLowerCase()
					.includes(lowercasedValue);
			});
			setData(filteredData);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Search filterSearchData={filterSearchData} />
				<IconButton className={classes.iconBtn}>
					<WbSunnyIcon />
				</IconButton>
			</div>
			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="flex-start"
				alignItems="flex-start"
			>
				{data.length > 0 &&
					data?.map((elem) => (
						<Grid item xs={12} sm={8} md={4} lg={3} key={elem?.id}>
							<MovieCard item={elem} />
						</Grid>
					))}
				{data.length === 0 && (
					<Typography variant="h5" noWrap className={classes.headerTitle}>
						No results found for search
					</Typography>
				)}
			</Grid>
		</div>
	);
};

export default MoviesList;
