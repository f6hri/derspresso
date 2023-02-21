import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Info from "../components/Shared/Info";
import DefaultLink from "../components/Shared/Link/DefaultLink";
import GhostLink from "../components/Shared/Link/GhostLink";
import Paragraph from "../components/Shared/Paragraph";
import BigTitle from "../components/Shared/Title/BigTitle";
import SmallTitle from "../components/Shared/Title/SmallTitle";
import Main from "../layout/Main";


const Article: React.FC = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Grid templateColumns='repeat(6, 1fr)' gap={10} py={5}>
                    <GridItem colSpan={1}>
                        <Box alignItems="start" display="flex" flexDir="column" gap={3}>
                            <GhostLink color="cyan" href="/asdf/adsf" title="Tam Sayılar ve İşlemler"/>
                            <GhostLink color="cyan" href="/asdf/adsfs" title="Rasyonel Sayılar"/>
                            <GhostLink color="cyan" href="/asdf/adsfsd" title="Bölenler ve Katlar"/>
                            <GhostLink color="cyan" href="/asdf/adssfsd" title="Modüler Aritmatik"/>
                        </Box>
                        <Box alignItems="start" display="flex" flexDir="column" gap={3} mt={8}>
                            <GhostLink size="sm" href="/asdf/adsf" title="Sayılara Giriş"/>
                            <GhostLink size="sm" href="/asdsf/adsf" title="Sayı Kümeleri"/>
                            <GhostLink size="sm" href="/assdf/adsf" title="Sayı Doğrusu"/>
                            <GhostLink size="sm" href="/asddf/adsf" title="Pozitif ve Negatif Sayılar"/>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <BigTitle text="Sayılara Giriş" />
                        <SmallTitle text="Sayı ve Rakam" />
                        <Paragraph text="Bir çokluğu ifade etmek, saymak, ölçmek ve 
                                yorumlamak gibi işlemlerde kullanılan matematiksel nesnelere sayı denir.
                                Sayıları ifade edebilmek için kullandığımız sembollere rakam denir. 
                                Onluk sayma sisteminde kullanılan 10 rakam vardır." />
                        <Info mathml={`<math xmlns="http://www.w3.org/1998/Math/MathML">
                                        <mn>1</mn>
                                        <mo>=</mo>
                                        <mstyle displaystyle="true" scriptlevel="0">
                                            <mfrac>
                                            <mn>1</mn>
                                            <mn>1</mn>
                                            </mfrac>
                                        </mstyle>
                                        <mo>=</mo>
                                        <mstyle displaystyle="true" scriptlevel="0">
                                            <mfrac>
                                            <mn>2</mn>
                                            <mn>2</mn>
                                            </mfrac>
                                        </mstyle>
                                        <mo>=</mo>
                                        <mstyle displaystyle="true" scriptlevel="0">
                                            <mfrac>
                                            <mn>5</mn>
                                            <mn>5</mn>
                                            </mfrac>
                                        </mstyle>
                                        </math>`} />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <VStack spacing={4}>
                            <DefaultLink href="#" title="Sayılar ve İşlemler" size="sm" />
                        </VStack>
                    </GridItem>
                </Grid>
            </Main>
        </>
    );
}

export default Article;