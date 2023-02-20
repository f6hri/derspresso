import { Button } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Menu: React.FC = () => {
    return (
        <>
            <Button variant="ghost">
                <FiMenu />
            </Button>
        </>
    );
}

export default Menu;