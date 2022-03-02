import Router, { Route } from "preact-router";
import { h, render } from "preact";
import Home from "./routes/Home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/syne/400.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "./main.css";

const styles = {
	global: {
		"html, body": {
			color: "brand.navy",
			backgroundColor: "brand.ivory",
			lineHeight: "1.5rem",
			fontFamily: "'Syne', sans-serif",
		},
	},
};

const colors = {
	brand: {
		ivory: "#F7F1EC",
		red: "#D55954",
		green: "#1B998B",
		navy: "#05203D",
	},
};
const fonts = {
	heading: '"GR Milesons", sans-serif',
	body: '"Syne", sans-serif',
};

const theme = extendTheme({ styles, colors, fonts });

const Main = () => (
	<>
		<ChakraProvider theme={theme}>
			<Router>
				<Route path="/" component={Home} />
			</Router>
		</ChakraProvider>
	</>
);

render(<Main />, document.body);
