import React from "react";
import PropTypes from "prop-types";
import { Box, useTheme } from "@material-ui/core";

const PageBody = ({ children, style }) => {
	const theme = useTheme();
	return (
		<Box
			style={{
				padding: theme.spacing(3),
				flex: 1,
				overflow: "auto",
				backgroundColor: "#273244",
				...style,
			}}
		>
			{children}
		</Box>
	);
};

export default PageBody;

PageBody.propTypes = {
	children: PropTypes.node,
	style: PropTypes.object,
};
