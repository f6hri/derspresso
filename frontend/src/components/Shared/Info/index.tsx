import { Alert, Text } from "@chakra-ui/react"
import { MathComponent } from "mathjax-react";

interface InfoProps{
    mathml:string
}

const Info:React.FC<InfoProps> = ({mathml}) => {
    return (
        <Alert variant='left-accent' status='info' rounded="md" my={3}>
            <MathComponent mathml={mathml} />
        </Alert>
    )
}

export default Info;