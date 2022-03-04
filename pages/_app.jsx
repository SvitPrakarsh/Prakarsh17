import "../styles/globals.css";
// import "@fontsource/staatliches/400.css";
// import "@fontsource/syne/400.css";
// import "@fontsource/syne/600.css";
// import "@fontsource/syne/700.css";
// import "@fontsource/syne/800.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Global
                styles={`   
                @font-face {
                    font-family: 'GS Milesons';
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    src: url('./GR-Milesons.otf') format('opentype');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                `}
            />
            <ColorModeScript initialColorMode="light" />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
