import { NavLink } from "react-router-dom";
import RoutePaths from "../routes/RoutePaths";
import { Button, useColorMode, Box, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

const Navbar:React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Box
      boxShadow="md"
      p={2.5}
      bg="brand.500"
      color="brand.letter"
      borderRadius={45}
      width={["90%", "80%", "70%", "50%"]}
      mx="auto"
      my={1}
      opacity={0.8}
      alignContent={"center"}
      position={"sticky"}
      top={0}
      zIndex={1}
    >
      <Flex
        alignItems="center"
        justifyContent={["space-between", "center"]}
        flexDirection={["column", "row"]}
      >
        <Flex as="nav" gap={6} alignItems={"center"} flexDirection={["column", "row"]}>
          <Box
            _hover={{
              transition: "all 0.3s ease",
              borderBottom: "2px solid white ",
            }}
          >
            <NavLink to={RoutePaths.Home}>{t('Home')}</NavLink>
          </Box>
          <Box
            _hover={{
              transition: "all 0.3s ease",
              borderBottom: "2px solid white",
            }}
          >
            <NavLink to={RoutePaths.About}>{t('About')}</NavLink>
          </Box>

          <Box
            _hover={{
              transition: "all 0.3s ease",
              borderBottom: "2px solid white",
            }}
          >
            <NavLink to={RoutePaths.Contact}>{t('Contact')}</NavLink>
          </Box>
        </Flex>

        <Box display="flex" gap={4} alignItems="center" flexDirection={["column", "row"]}>
          <LanguageSwitch />
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            color={colorMode === "dark" ? "brand.100" : "brand.100"}
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
