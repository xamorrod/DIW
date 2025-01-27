import { extendTheme, Button} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {


  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  modes: {
    light: {
      brand: {
        letter: "#000000",
        50: "#E5FDFF",
        100: "#BFD7FF",
        200: "#BFD7FF",
        300: "#9BB1FF",
        400: "#788BFF",
        500: "#0B3C49",
      }
    },
    dark: {
      brand: {
        letter: "#FFFFFF",
        50: "#E5FDFF",
        100: "#E2FDFF",
        200: "#7D869C",
        300: "#9BB1FF",
        400: "#0B3C49 ",
        500: "#020F2E",
      }
    }

  },
  components:{
    Button, Box : {
      baseStyle:{
        _hover:{
          color:"brand.300",
        }
      }
    }
  },
  config:{
    initialColorMode:"dark"
  }
});

export default theme;
