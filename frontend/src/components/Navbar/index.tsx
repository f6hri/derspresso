import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import LContainer from "../../layout/LContainer";
import ChangeTheme from "./ChangeTheme";
import Menu from "./Menu";

const Navbar: React.FC = () => {
    const bgColor = useColorModeValue("#fff", "gray.800")
    const shadow = useColorModeValue("xs", "md")
    return (
        <Box as="nav" py={3} pos="sticky" top={0} boxShadow={shadow} bg={bgColor} zIndex={1}>
            <LContainer>
                <Flex justify="space-between" align="center">
                    <Image src="https://derspresso.mncdn.com/assets/img/logo.png" alt="derspresso" />
                    <Flex gap={3}>
                        <ChangeTheme />
                        <Menu />
                    </Flex>
                </Flex>
            </LContainer>
        </Box>
    );
}

export default Navbar;