import { Button, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ChangeTheme: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === 'light' ? (<FiSun />) : <FiMoon />}
        </Button>
    );
}

export default ChangeTheme;