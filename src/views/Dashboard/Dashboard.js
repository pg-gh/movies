import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { PageBody } from "../../components";
import { useApi } from "../../shared/hooks/use-api";
import Spinner from "../../components/Spinner";
import MoviesList from "../../components/movies-list/MoviesList";

const Dashboard = () => {
	const [getStudents, data, loadState] = useApi({
		url: "get-homeboard-movies",
	});

	useEffect(() => {
		void getStudents();
	}, [getStudents]);

	return (
		<React.Fragment>
			<PageBody>
				<Box
					flexGrow="1"
					width="100%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					{loadState === "loading" && <Spinner />}
					{loadState === "loaded" && data?.movies && (
						<MoviesList list={data?.movies} />
					)}
				</Box>
			</PageBody>
		</React.Fragment>
	);
};

export default Dashboard;
