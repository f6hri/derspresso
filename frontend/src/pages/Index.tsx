import { VStack, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import ContentCard from "../components/ContentCard";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";

const Index: React.FC = () => {
    return (
        <>
            <Navbar />
            <Main>
                <VStack textAlign="center" spacing={6} my={5}>
                    <Heading as="h1" fontWeight="semibold">Derspresso'ya Hoşgeldiniz!</Heading>
                    <Text fontSize={18}>
                        Derspresso ücretsiz ve reklamsız kullanabileceğiniz,
                        lise öğrencilerine yönelik bir matematik içerik sitesidir.
                        Konu başlıklarına göre tüm ders notlarına aşağıdaki linklerden erişebilirsiniz.
                    </Text>
                </VStack>
                <Wrap spacing={10} justify="center" my={10}>
                    <WrapItem>
                        <ContentCard />
                    </WrapItem>
                    <WrapItem>
                        <ContentCard />
                    </WrapItem>
                    <WrapItem>
                        <ContentCard />
                    </WrapItem>
                    <WrapItem>
                        <ContentCard />
                    </WrapItem>
                    <WrapItem>
                        <ContentCard />
                    </WrapItem>
                </Wrap>
            </Main>
        </>
    );
}

export default Index;