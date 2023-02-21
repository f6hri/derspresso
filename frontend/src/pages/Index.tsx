import { VStack, Heading, Text, Wrap, WrapItem, SimpleGrid } from "@chakra-ui/react";
import ContentCard from "../components/ContentCard";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";

const Index: React.FC = () => {
    return (
        <>
            <Navbar />
            <Main>
                <VStack textAlign="center" spacing={6} my={8}>
                    <Heading as="h2" fontWeight="semibold">Derspresso'ya Hoşgeldiniz!</Heading>
                    <Text fontSize={18}>
                        Derspresso ücretsiz ve reklamsız kullanabileceğiniz,
                        lise öğrencilerine yönelik bir matematik içerik sitesidir.
                        Konu başlıklarına göre tüm ders notlarına aşağıdaki linklerden erişebilirsiniz.
                    </Text>
                </VStack>
                <SimpleGrid columns={[1, 2, 3]} spacing={8} my={10}>
                        <ContentCard />
                        <ContentCard />
                        <ContentCard />
                        <ContentCard />
                        <ContentCard />
                </SimpleGrid>
            </Main>
        </>
    );
}

export default Index;