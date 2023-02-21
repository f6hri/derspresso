import { Button, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface DefaultLinkProps {
    href: string,
    title: string,
    size?: string,
    icon?: any
}

const DefaultLink: React.FC<DefaultLinkProps> = ({ href, title, size, icon }) => {
    const navigate = useNavigate();
    const color = useColorModeValue("blackAlpha.600","whiteAlpha.600")
    return <Button size={size} fontWeight="regular" variant="link" color={color} onClick={() => navigate(href)}>{icon} {title}</Button>
}

export default DefaultLink;
