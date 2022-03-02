import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "GS Milesons, sans-serif",
        body: "Syne, sans-serif",
    },
    initialColorMode: "light",
    useSystemColorMode: false,
});

export default theme;
