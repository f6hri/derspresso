import { Text } from "@chakra-ui/react";

interface ParagraphProps{
    text:string
}

const Paragraph:React.FC<ParagraphProps> = ({text}) => {
    return <Text my={3} fontSize={18} lineHeight={8}>{text}</Text>
} 

export default Paragraph;