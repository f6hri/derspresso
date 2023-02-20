import { Grid, GridItem, VStack, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import DefaultLink from "../components/Shared/Link/DefaultLink";
import Main from "../layout/Main";


const Article: React.FC = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Grid templateColumns='repeat(5, 1fr)' gap={10} py={5}>
                    <GridItem colSpan={1}>
                        <VStack spacing={10} align="start">
                            <VStack spacing={6} align="start">
                                <DefaultLink href="#" title="Sayılar ve İşlemler" color="teal" />
                            </VStack>
                            <VStack spacing={6} align="start">
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                                <Button variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={3}>sadf</GridItem>
                    <GridItem colSpan={1}>
                        <VStack spacing={4}>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                            <Button size="sm" variant="link" fontWeight="regular">Sayılar ve İşlemler</Button>
                        </VStack>
                    </GridItem>
                </Grid>
            </Main>
        </>
    );
}

export default Article;