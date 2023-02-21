import { Heading } from "@chakra-ui/react"

interface BigTitleProps{
    text:string
}

const BigTitle:React.FC<BigTitleProps> = ({ text }) => {
    return <Heading as="h1" fontWeight="semibold">{ text }</Heading>
}

export default BigTitle;