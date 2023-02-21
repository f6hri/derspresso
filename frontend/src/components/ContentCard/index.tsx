import { Card, CardBody, VStack, Heading, Button } from "@chakra-ui/react";
import GhostLink from "../Shared/Link/GhostLink";

const ContentCard: React.FC = () => {
    return (
        <Card minW={100} border="1px" borderColor="blackAlpha.200">
            <CardBody>
                <Heading as="h3" fontWeight="medium" fontSize="2xl" textAlign="center">Sayılar ve İşlemler</Heading>
                <VStack spacing={2} mt={5}>
                    <GhostLink href="/asdf/adsf" title="Tam Sayılar ve İşlemler" color="cyan" size="full" />
                    <Button variant="ghost" colorScheme="cyan" w="full">Tam Sayılar ve İşlemler</Button>
                    <Button variant="ghost" colorScheme="cyan" w="full">Tam Sayılar ve İşlemler</Button>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default ContentCard;