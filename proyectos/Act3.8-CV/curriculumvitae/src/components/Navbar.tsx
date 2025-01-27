import { NavLink } from "react-router-dom";
import RoutePaths from "../routes/RoutePaths";
import { Button, useColorMode, Box, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // Hook de traducción
  const { t } = useTranslation();  
  return (
    <Box boxShadow="md" p={2.5} bg="brand.500" color="brand.letter" borderRadius={20}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex as="nav" gap={6} alignItems={"center"} >
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
          <LanguageSwitch />
        </Flex>

        <Button
          onClick={toggleColorMode}
          bg="transparent"
          color={colorMode === "dark" ? "brand.100" : "brand.500"}
        >
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
    </Box>
  );

};

export default Navbar;
