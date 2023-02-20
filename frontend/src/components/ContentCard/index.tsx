import { Card, CardBody, VStack, Heading, Button } from "@chakra-ui/react";

const ContentCard: React.FC = () => {
    return (
        <Card minW="sm" boxShadow="base">
            <CardBody>
                <Heading as="h3" fontWeight="medium" fontSize="2xl" textAlign="center">Sayılar ve İşlemler</Heading>
                <VStack spacing={2} mt={5}>
                    <Button variant="ghost" colorScheme="cyan" w="full">Tam Sayılar ve İşlemler</Button>
                    <Button variant="ghost" colorScheme="cyan" w="full">Tam Sayılar ve İşlemler</Button>
                    <Button variant="ghost" colorScheme="cyan" w="full">Tam Sayılar ve İşlemler</Button>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default ContentCard;