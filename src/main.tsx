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
	red: {
		50: "#faebeb",
		100: "#f0c3c2",
		200: "#e69c99",
		300: "#dc7470",
		400: "#d24c47",
		500: "#b8332d",
		600: "#8f2723",
		700: "#661c19",
		800: "#3d110f",
		900: "#140605",
	},
	blue: {
		50: "#e7f2fd",
		100: "#b8d8f9",
		200: "#89bdf5",
		300: "#5aa3f1",
		400: "#2b89ee",
		500: "#116fd4",
		600: "#0e57a5",
		700: "#0a3e76",
		800: "#062547",
		900: "#020c18",
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
