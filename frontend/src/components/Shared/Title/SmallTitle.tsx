import { Heading } from "@chakra-ui/react"

interface SmallTitleProps{
    text:string
}

const SmallTitle:React.FC<SmallTitleProps> = ({ text }) => {
    return <Heading as="h3" fontWeight="medium" fontSize={26} mt={6}>{ text }</Heading>
}

export default SmallTitle;