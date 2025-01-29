import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        backgroundColor: mode("#467180", "#27364d")(props),
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/climpek.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        color: "brand.letter",
      },
    }),
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },

  colors: {
    brand: {
      letter: "#FFFFFF",
      50: "#E5FDFF",
      100: "#BFD7FF",
      200: "#BFD7FF",
      300: "#9BB1FF",
      400: "#788BFF",
      500: "#0B3C49",
      600: "#020F2E",
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          color: "brand.600",
        },
      },
    },
    Box: {
      baseStyle: {
        _hover: {
          color: "brand.300",
        },
      },
    },
   
    Link: {
      baseStyle: {
        textDecoration: "none", 
        transition: "all 0.3s ease-in-out", 
      },
      _hover: {
        backgroundColor: "brand.500", 
        color: "white", 
        transform: "scale(1.1)", 
      },
    },
  },
});

export default theme;
