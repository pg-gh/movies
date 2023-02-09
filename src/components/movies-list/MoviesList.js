import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import MovieCard from "../movie-card/MovieCard";
import Search from "../../components/search/Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import MovieCardDetails from "../movie-card/MovieCardDetails";

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
	collapseRoot: {
		width: "100%",
		borderRadius: 11,
	},
	collapseEntered: {
		margin: "0 0 30px",
	},
}));

const MoviesList = ({ list }) => {
	const classes = useStyles();
	const [data, setData] = useState(list);
	const [cardData, setCardData] = useState(null);

	const [checked, setChecked] = React.useState(false);

	const handleChange = (id) => {
		setChecked(true);
		const items = [...data];
		const cdata = items.filter((c) => c.id === id)[0];
		setCardData(cdata);
	};

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
			<Collapse
				in={checked}
				classes={{
					root: classes.collapseRoot,
					entered: classes.collapseEntered,
				}}
				timeout="auto"
			>
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						{cardData !== null && <MovieCardDetails movie={cardData} />}
					</Grid>
				</Grid>
			</Collapse>
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
							<MovieCard movie={elem} onCardHandler={handleChange} />
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
