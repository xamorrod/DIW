import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {


  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  // Adding colors styes depeding of which color theme is applied
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
        }
      }
    },
    Box: {
      baseStyle: {
        _hover: {
          color: "brand.300",
        }
      }
    }
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
    },
    md: {
      fontSize: "md",
      px: 6,
    },
    lg: {
      fontSize: "lg",
      px: 8,
    },
  },

  config: {
    initialColorMode: "dark"
  }
});

export default theme;
