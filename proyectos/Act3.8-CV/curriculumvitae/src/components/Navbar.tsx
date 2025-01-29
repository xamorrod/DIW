import { NavLink } from "react-router-dom";
import RoutePaths from "../routes/RoutePaths";
import { Button, useColorMode, Box, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa"; // Iconos más formales

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Box
      boxShadow="md"
      p={3}
      bg="rgba(39, 54, 77, 0.7)"
      borderRadius={45}
      width="fit-content"
      maxWidth="1200px"
      mx="auto"
      mb={4}
      alignContent="center"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        px={6}
      >
        <Flex as="nav" gap={8} alignItems="center" flexDirection={["column", "row"]}>
          <NavLink
            to={RoutePaths.Home}>

            <FaHome size={35} />
          </NavLink>

          <NavLink
            to={RoutePaths.About}>
            <FaUser size={35} />
          </NavLink>

          <NavLink
            to={RoutePaths.Projects}>
            <FaCode size={35} />
          </NavLink>

          <NavLink
            to={RoutePaths.Contact}>
            <FaEnvelope size={35} />
          </NavLink>
        </Flex>

        <Box display="flex" gap={4} alignItems="center" flexDirection={["column", "row"]}>
          <LanguageSwitch />
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            color="brand.100"
            size={["md", "lg"]}
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
