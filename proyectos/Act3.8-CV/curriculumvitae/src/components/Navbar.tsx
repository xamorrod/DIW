import { Link } from "react-router-dom";
import RoutePaths from "../routes/RoutePaths";
import { Button, useColorMode, Box, Flex, Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box boxShadow="md" p={4} bg="blue.500" color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex as="nav" gap={5}>
          <Box
            _hover={{
              transition: "all 0.3s ease",
              borderBottom: "2px solid white ",
            }}
          >
            <Link to={RoutePaths.Home}>Home</Link>
          </Box>
          <Box
            _hover={{
              transition: "all 0.3s ease",
              borderBottom: "2px solid white",
            }}
          >
            <Link to={RoutePaths.About}>About</Link>
          </Box>

          <Box
            _hover={{
              transition: "all 0.3s ease",
              borderBottom: "2px solid white",
            }}
          >
            <Link to={RoutePaths.Contact}>Contact</Link>
          </Box>
        </Flex>

        <Button
          onClick={toggleColorMode}
          bg="transparent"
          _hover={{ bg: "blue.400" }}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
