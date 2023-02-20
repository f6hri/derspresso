import { Box } from "@chakra-ui/react";
import LContainer from "./LContainer";

const Main: React.FC = ({ children }: any) => {
    return (
        <Box as="main">
            <LContainer>
                {children}
            </LContainer>
        </Box>
    );
}

export default Main;