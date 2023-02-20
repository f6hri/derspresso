import { Container } from "@chakra-ui/react";

const LContainer: React.FC = ({ children }: any) => {
    return <Container maxW="container.xl">{children}</Container>;
}

export default LContainer;