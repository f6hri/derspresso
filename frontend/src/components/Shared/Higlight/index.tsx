import { Code } from "@chakra-ui/react"

interface HiglightProps{
    text:string
}

const Higlight:React.FC<HiglightProps> = ({ text }) => {
    return <Code colorScheme="cyan">{ text }</Code>
}