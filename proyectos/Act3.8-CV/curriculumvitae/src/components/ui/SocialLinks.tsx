import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

// Component that shows the social links and give easy access to them
const SocialLinks: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={4}
            position="fixed"
            left={["5%", "2%", "2%"]}
            top="50%"
            transform="translateY(-50%)"
            zIndex={3}
            alignItems="center"
        >
            <IconButton
                as="a"
                href="https://github.com/abrahammordev"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub />}
                boxSize={["40px", "50px", "60px"]}
                color={colorMode === "dark" ? "brand.100" : "black"}
                _hover={{
                    color: "brand.50",
                    transform: "scale(1.3)",
                    transition: "all 0.3s ease",
                }}
                isRound
                opacity={0.7}
                _active={{
                    opacity: 1,
                }}
            />

            <IconButton
                as="a"
                href="https://www.linkedin.com/in/abrahammordev"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                boxSize={["40px", "50px", "60px"]}
                color={colorMode === "dark" ? "brand.100" : "black"}

                _hover={{
                    color: "brand.50",
                    transform: "scale(1.3)",
                    transition: "all 0.3s ease",
                }}
                isRound
                opacity={0.7}
                _active={{
                    opacity: 1,
                }}
            />

            <IconButton
                as="a"
                href="mailto:tu-abrahammordev@gmail.com"
                target="_blank"
                aria-label="Gmail"
                icon={<FaGoogle />}
                boxSize={["40px", "50px", "60px"]}
                color={colorMode === "dark" ? "brand.100" : "black"}
                _hover={{
                    color: "brand.300",
                    transform: "scale(1.3)",
                    transition: "all 0.3s ease",
                }}
                isRound
                opacity={0.7}
                _active={{
                    opacity: 1,
                }}
            />
        </Box>
    );
};

export default SocialLinks;
